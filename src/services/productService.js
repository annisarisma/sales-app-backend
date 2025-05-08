import prisma from '../prisma/client.js';

const getProduct = async () => {
  const response = await prisma.products.findMany({
    include: {
      categories: true
    }
  });

  return response.map(product => ({
    prd_id: product.prd_id,
    product_code: product.product_code,
    product_name: product.product_name,
    category_name: product.categories?.category_name || null
  }));
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
  const response = await prisma.products.create({
    data: {
      cat_id,
      product_code,
      product_name,
      product_description,
    },
    include: {
      categories: true
    }
  });

  return {
    prd_id: response.prd_id,
    product_code: response.product_code,
    product_name: response.product_name,
    product_description: response.product_description,
    category_name: response.categories?.category_name || null
  };
};

const updateProduct = async ({ cat_id, product_code, product_name, product_description }, prdId) => {
  const response = await prisma.products.update({
    where: {
      prd_id: Number(prdId)
    },
    data: {
      cat_id,
      product_code,
      product_name,
      product_description
    },
    include: {
      categories: true
    }
  });

  return {
    prd_id: response.prd_id,
    product_code: response.product_code,
    product_name: response.product_name,
    product_description: response.product_description,
    category_name: response.categories?.category_name || null
  };
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
