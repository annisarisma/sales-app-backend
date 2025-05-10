import prisma from '../prisma/client.js';

const getImage = async () => {
  const response = await prisma.images.findMany({
    include: {
      products: true
    }
  });

  return response.map(image => ({
    img_id: image.img_id,
    filename: image.filename,
    product_code: image.products?.product_code || null,
    product_name: image.products?.product_name || null,
    product_description: image.products?.product_description || null
  }));
};

const getImageById = async (imgId) => {
  const response = await prisma.images.findUnique({
    where: {
      img_id: Number(imgId)
    },
    include: {
      products: true
    }
  });
  return {
    img_id: response.img_id,
    filename: response.filename,
    product_code: response.products?.product_code || null,
    product_name: response.products?.product_name || null,
    product_description: response.products?.product_description || null
  };
};

const createImage = async ( prd_id, filenames ) => {
  const responses = [];

  for (const filename of filenames) {
    const response = await prisma.images.create({
      data: {
        prd_id,
        filename
      }
    });

    responses.push({
      img_id: response.img_id,
      filename: response.filename
    });
  }

  return responses;
};

const updateImage = async ({ prd_id, filename }, imgId) => {
  const response = await prisma.images.update({
    where: {
      img_id: Number(imgId)
    },
    data: {
      prd_id,
      filename
    },
    include: {
      products: true
    }
  });

  return {
    img_id: response.img_id,
    filename: response.filename,
    product_code: response.products?.product_code || null,
    product_name: response.products?.product_name || null,
    product_description: response.products?.product_description || null
  };
};

const destroyImage = async (imgIds, prdId) => {
  return await prisma.images.deleteMany(
    imgIds.length > 0
    ? {
        where: {
          prd_id: Number(prdId),
          img_id: { notIn: imgIds.map(Number) },
        },
      }
    : {
        where: {
          prd_id: Number(prdId),
        },
      }
  );

};

export default { getImage, getImageById, createImage, updateImage, destroyImage };
