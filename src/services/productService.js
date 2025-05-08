import prisma from '../prisma/client.js';

const getProduct = async () => {
  const response = await prisma.products.findMany();
  return response;
};

const getProductById = async (prdId) => {
  const response = await prisma.products.findUnique({
    where: {
      prd_id: Number(prdId)
    }
  });
  return response;
};

const createProduct = async ({ cat_id, product_code, product_name, product_description }) => {
  return await prisma.products.create({
    data: {
      cat_id,
      product_code,
      product_name,
      product_description
    },
  });
};

const updateProduct = async ({ cat_id, product_code, product_name, product_description }, prdId) => {
  return await prisma.products.update({
    where: {
      prd_id: Number(prdId)
    },
    data: {
      cat_id,
      product_code,
      product_name,
      product_description
    },
  });
};

const destroyProduct = async (prdId) => {
  // Cari user dan hapus
  return await prisma.products.delete({
    where: { 
      prd_id: Number(prdId)
    },
  });
};

export default { getProduct, getProductById, createProduct, updateProduct, destroyProduct };
