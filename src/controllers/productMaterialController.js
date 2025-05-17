import productMaterialService from '../services/productMaterialService.js';

const getProductMaterial = async (req, res) => {
  try {
    const response = await productMaterialService.getProductMaterial();
    res.status(200).json(response);
  } catch (error) {
    console.error("error: ", error.message);
    res.status(404).json({ message: 'Get user was failed' });
  }
};

const getProductMaterialById = async (req, res) => {
  try {
    const response = await productMaterialService.getProductMaterialById(req.params.pmtId);
    res.status(200).json(response);
  } catch (error) {
    console.error("error: ", error.message);
    res.status(404).json({ message: 'Get user was failed' });
  }
};

const createProductMaterial = async (req, res) => {
  const { productMaterial_code, productMaterial_name, productMaterial_description } = req.body;


  try {
    const response = await productMaterialService.createProductMaterial({ productMaterial_code, productMaterial_name, productMaterial_description });

    //  response
    res.status(201).json({
      message: 'ProductMaterial created successfully',
      data: response
    });
  } catch (error) {
    if (error.code === 'P2002') {
      return res.status(400).json({ error: 'ProductMaterial already exist' });
    }
    console.error("error: ", error.message);
    res.status(500).json({ error: error.message });
  }
};

const updateProductMaterial = async (req, res) => {
  const pmtId = req.body.pmtId;
  const { productMaterial_code, productMaterial_name, productMaterial_description } = req.body;

  try {
    const response = await productMaterialService.updateProductMaterial({ productMaterial_code, productMaterial_name, productMaterial_description }, pmtId);
    
    // response
    res.status(201).json({
      message: 'ProductMaterial updated successfully',
      data: response
    });
  } catch (error) {
    if (error.code === 'P2002') {
      return res.status(400).json({ error: 'Email or username already exist' });
    }
    res.status(500).json({ error: error.message });
  }
};

const destroyProductMaterial = async (req, res) => {
  const { pmtId } = req.params;

  try {
    const response = await productMaterialService.destroyProductMaterial(pmtId);
    
    // response
    res.status(200).json({
      message: 'ProductMaterial deleted successfully',
      data: response
    });
  } catch (error) {
    console.error("error: ", error.message);
    res.status(500).json({ error: error.message });
  }
};

export default { getProductMaterial, getProductMaterialById, createProductMaterial, updateProductMaterial, destroyProductMaterial };
