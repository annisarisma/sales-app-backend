import prisma from '../prisma/client.js';
import bcrypt from 'bcrypt'

const getRole = async () => {
  const response = await prisma.roles.findMany();
  return response;
};

const getRoleById = async (rolId) => {
  const response = await prisma.roles.findUnique({
    where: {
      rol_id: Number(rolId)
    }
  });
  return response;
};

const createRole = async ({ role_code, role_name, role_description }) => {
  return await prisma.roles.create({
    data: {
      role_code,
      role_name,
      role_description
    },
  });
};

const updateRole = async ({ role_code, role_name, role_description }, rolId) => {
  return await prisma.roles.update({
    where: {
      rol_id: Number(rolId)
    },
    data: {
      role_code,
      role_name,
      role_description
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
