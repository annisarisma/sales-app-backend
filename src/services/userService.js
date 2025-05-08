import prisma from '../prisma/client.js';
import bcrypt from 'bcrypt'
import generateAuthToken from '../helpers/tokenHelper.js'

const authenticateUser = async ({username, email, password}) => {
  // model
  const user = await prisma.users.findUnique({ 
    where: {
      username
    }
  });

  // validation user
  if (!user) {
    throw new Error('User not found');
  }

  console.log('asdasd');
  // validation password
  const isPasswordValid = await bcrypt.compare(password, user.password);
  if (!isPasswordValid) {
    throw new Error('Invalid credentials');
  }

  // generate token
  const token = generateAuthToken(user);

  // return
  return { user, token };
}

const getUser = async () => {
  const response = await prisma.users.findMany({
    include: {
      roles: true
    }
  });

  return response.map(user => ({
    usr_id: user.usr_id,
    username: user.username,
    email: user.email,
    role_name: user.roles?.role_name || null
  }));
};

const getUserById = async (usrId) => {
  const response = await prisma.users.findUnique({
    where: {
      usr_id: Number(usrId)
    }
  });
  return response;
};

const createUser = async ({ rol_id, username, email, password }) => {
  // validation email
  const emailExists = await prisma.users.findUnique({
    where: { email },
  });
  if (emailExists) {
    throw new Error('Email already exist');
  }

  // validation username
  const usernameExists = await prisma.users.findUnique({
    where: { username },
  });
  if (usernameExists) {
    throw new Error('Username already exist');
  }

  const hashPassword = await bcrypt.hash(password, 10);
  const response = await prisma.users.create({
    data: {
      rol_id,
      username,
      email,
      password: hashPassword
    },
    include: {
      roles: true
    }
  });

  return {
    usr_id: response.usr_id,
    username: response.username,
    email: response.email,
    role_name: response.roles?.role_name || null
  };
};

const updateUser = async ({ rol_id, username, email }, usrId) => {
  // validation email
  const emailExists = await prisma.users.findUnique({
    where: { 
      email,
      NOT: { usr_id: Number(usrId) }
    },
  });
  if (emailExists) {
    throw new Error('Email already exist');
  }

  // validation username
  const usernameExists = await prisma.users.findUnique({
    where: { 
      username,
      NOT: { usr_id: Number(usrId) }
    },
  });
  if (usernameExists) {
    throw new Error('Username already exist');
  }

  const response = await prisma.users.update({
    where: {
      usr_id: Number(usrId)
    },
    data: {
      rol_id,
      username,
      email
    },
    include: {
      roles: true
    }
  });

  return {
    usr_id: response.usr_id,
    username: response.username,
    email: response.email,
    role_name: response.roles?.role_name || null
  }
};

const destroyUser = async (usrId) => {
  // Cari user dan hapus
  return await prisma.users.delete({
    where: { 
      usr_id: Number(usrId)
    },
  });
};

export default { authenticateUser, getUser, getUserById, createUser, updateUser, destroyUser };
