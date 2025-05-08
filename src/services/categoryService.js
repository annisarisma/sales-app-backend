import prisma from '../prisma/client.js';

const getCategory = async () => {
  const response = await prisma.categories.findMany();
  return response;
};

const getCategoryById = async (catId) => {
  const response = await prisma.categories.findUnique({
    where: {
      cat_id: Number(catId)
    }
  });
  return response;
};

const createCategory = async ({ category_code, category_name }) => {
  return await prisma.categories.create({
    data: {
      category_code,
      category_name,
    },
  });
};

const updateCategory = async ({ category_code, category_name }, catId) => {
  return await prisma.categories.update({
    where: {
      cat_id: Number(catId)
    },
    data: {
      category_code,
      category_name,
    },
  });
};

const destroyCategory = async (catId) => {
  // Cari user dan hapus
  return await prisma.categories.delete({
    where: { 
      cat_id: Number(catId)
    },
  });
};

export default { getCategory, getCategoryById, createCategory, updateCategory, destroyCategory };
