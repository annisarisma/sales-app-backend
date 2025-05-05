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
  const response = await prisma.users.findMany();
  return response;
};

const getUserById = async (usrId) => {
  const response = await prisma.users.findUnique({
    where: {
      usr_id: Number(usrId)
    }
  });
  return response;
};

const createUser = async ({ username, email, password }) => {
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
  return await prisma.users.create({
    data: {
      username,
      email,
      password: hashPassword
    },
  });
};

const updateUser = async ({ username, email, password }, usrId) => {
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

  return await prisma.users.create({
    where: {
      usr_id: Number(usrId)
    },
    data: {
      username,
      email,
      password: hashPassword
    },
  });
};

export default { authenticateUser, getUser, getUserById, createUser, updateUser };
