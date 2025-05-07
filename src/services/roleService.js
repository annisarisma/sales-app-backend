import prisma from '../prisma/client.js';
import bcrypt from 'bcrypt'

const getRole = async () => {
  const response = await prisma.roles.findMany();
  return response;
};

const getRoleById = async (rolId) => {
  const response = await prisma.users.findUnique({
    where: {
      usr_id: Number(rolId)
    }
  });
  return response;
};

const createRole = async ({ username, email, password }) => {
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
    throw new Error('Rolename already exist');
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

const updateRole = async ({ username, email }, rolId) => {
  // validation email
  const emailExists = await prisma.users.findUnique({
    where: { 
      email,
      NOT: { usr_id: Number(rolId) }
    },
  });
  if (emailExists) {
    throw new Error('Email already exist');
  }

  // validation username
  const usernameExists = await prisma.users.findUnique({
    where: { 
      username,
      NOT: { usr_id: Number(rolId) }
    },
  });
  if (usernameExists) {
    throw new Error('Rolename already exist');
  }

  return await prisma.users.update({
    where: {
      usr_id: Number(rolId)
    },
    data: {
      username,
      email
    },
  });
};

const destroyRole = async (rolId) => {
  // Cari user dan hapus
  return await prisma.users.delete({
    where: { 
      usr_id: Number(rolId)
    },
  });
};

export default { getRole, getRoleById, createRole, updateRole, destroyRole };
