import prisma from '../prisma/client.js';

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

export default { createUser };
