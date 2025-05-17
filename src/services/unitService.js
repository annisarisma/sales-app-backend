import prisma from '../prisma/client.js';
import bcrypt from 'bcrypt'

const getUnit = async () => {
  const response = await prisma.units.findMany();
  return response;
};

const getUnitById = async (untId) => {
  const response = await prisma.units.findUnique({
    where: {
      unt_id: Number(untId)
    }
  });
  return response;
};

const createUnit = async ({ unit_code, unit_name }) => {
  return await prisma.units.create({
    data: {
      unit_code,
      unit_name,
    },
  });
};

const updateUnit = async ({ unit_code, unit_name }, untId) => {
  return await prisma.units.update({
    where: {
      unt_id: Number(untId)
    },
    data: {
      unit_code,
      unit_name,
    },
  });
};

const destroyUnit = async (untId) => {
  // Cari user dan hapus
  return await prisma.units.delete({
    where: { 
      unt_id: Number(untId)
    },
  });
};

export default { getUnit, getUnitById, createUnit, updateUnit, destroyUnit };
