import prisma from '../prisma/client.js';

const getUser = async () => {
  const response = await prisma.users.findMany();
  return response;
};

const getUserById = async (id) => {
  const response = await prisma.users.findUnique({
    where: {
      usr_id: Number(id)
    }
  });
  return response;
};

const createUser = async ({ username, email, first_name, last_name, phone_number, address }) => {
  return await prisma.users.create({
    data: {
      username,
      email,
      first_name,
      last_name,
      phone_number,
      address,
    },
  });
};

export default { getUser, getUserById, createUser };
