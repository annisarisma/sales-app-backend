import prisma from '../prisma/client.js';
import bcrypt from 'bcrypt'

const getMaterial = async () => {
  const response = await prisma.materials.findMany();
  return response;
};

const getMaterialById = async (matId) => {
  const response = await prisma.materials.findUnique({
    where: {
      mat_id: Number(matId)
    }
  });
  return response;
};

const createMaterial = async ({ unt_id, sup_id, material_code, material_brand, material_name }) => {
  return await prisma.materials.create({
    data: {
      unt_id: Number(unt_id),
      sup_id: Number(sup_id),
      material_code,
      material_brand,
      material_name,
    },
  });
};

const updateMaterial = async ({ unt_id, sup_id, material_code, material_brand, material_name }, matId) => {
  return await prisma.materials.update({
    where: {
      mat_id: Number(matId)
    },
    data: {
      unt_id: Number(unt_id),
      sup_id: Number(sup_id),
      material_code,
      material_brand,
      material_name,
    },
  });
};

const destroyMaterial = async (matId) => {
  // Cari user dan hapus
  return await prisma.materials.delete({
    where: { 
      mat_id: Number(matId)
    },
  });
};

export default { getMaterial, getMaterialById, createMaterial, updateMaterial, destroyMaterial };
