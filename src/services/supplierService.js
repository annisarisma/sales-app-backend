import prisma from '../prisma/client.js';
import bcrypt from 'bcrypt'

const getSupplier = async () => {
  const response = await prisma.suppliers.findMany();
  return response;
};

const getSupplierById = async (supId) => {
  const response = await prisma.suppliers.findUnique({
    where: {
      sup_id: Number(supId)
    }
  });
  return response;
};

const createSupplier = async ({ supplier_name, supplier_phone, supplier_address, supplier_email }) => {
  return await prisma.suppliers.create({
    data: {
      supplier_name,
      supplier_phone,
      supplier_address,
      supplier_email
    },
  });
};

const updateSupplier = async ({ supplier_name, supplier_phone, supplier_address, supplier_email }, supId) => {
  return await prisma.suppliers.update({
    where: {
      sup_id: Number(supId)
    },
    data: {
      supplier_name,
      supplier_phone,
      supplier_address,
      supplier_email
    },
  });
};

const destroySupplier = async (supId) => {
  // Cari user dan hapus
  return await prisma.suppliers.delete({
    where: { 
      sup_id: Number(supId)
    },
  });
};

export default { getSupplier, getSupplierById, createSupplier, updateSupplier, destroySupplier };
