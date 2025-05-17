import prisma from '../prisma/client.js';
import bcrypt from 'bcrypt'

const getProductMaterial = async () => {
  const response = await prisma.product_material.findMany({
    include: {
      products: true,
      materials: true
    }
  });

  return response.map(item => ({
    pmt_id: item.pmt_id,
    product_name: item.products?.product_name || null,
    material_name: item.materials?.material_name || null,
    quantity: item.quantity,
  }));
};

const getProductMaterialById = async (pmtId) => {
  const response = await prisma.product_material.findUnique({
    where: {
      pmt_id: Number(pmtId)
    }
  });
  return response;
};

const createProductMaterial = async ({ productMaterial_code, productMaterial_name, productMaterial_description }) => {
  return await prisma.product_material.create({
    data: {
      productMaterial_code,
      productMaterial_name,
      productMaterial_description
    },
  });
};

const updateProductMaterial = async ({ productMaterial_code, productMaterial_name, productMaterial_description }, pmtId) => {
  return await prisma.product_material.update({
    where: {
      pmt_id: Number(pmtId)
    },
    data: {
      productMaterial_code,
      productMaterial_name,
      productMaterial_description
    },
  });
};

const destroyProductMaterial = async (pmtId) => {
  // Cari user dan hapus
  return await prisma.product_material.delete({
    where: { 
      pmt_id: Number(pmtId)
    },
  });
};

export default { getProductMaterial, getProductMaterialById, createProductMaterial, updateProductMaterial, destroyProductMaterial };
