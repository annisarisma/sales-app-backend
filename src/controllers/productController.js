import productService from '../services/productService.js';

const getProduct = async (req, res) => {
  try {
    const response = await productService.getProduct();
    res.status(200).json(response);
  } catch (error) {
    console.error("error: ", error.message);
    res.status(404).json({ message: 'Get user was failed' });
  }
};

const getProductById = async (req, res) => {
  try {
    const response = await productService.getProductById(req.params.prdId);
    res.status(200).json(response);
  } catch (error) {
    console.error("error: ", error.message);
    res.status(404).json({ message: 'Get user was failed' });
  }
};

const createProduct = async (req, res) => {
  const { cat_id, product_code, product_name, product_description } = req.body;
  const filenames = req.files.map(file => file.filename);

  try {
    const response = await productService.createProduct({ cat_id, product_code, product_name, product_description, filenames });

    //  response
    res.status(201).json({
      message: 'Product created successfully',
      data: response
    });
  } catch (error) {
    if (error.code === 'P2002') {
      return res.status(400).json({ error: 'Product already exist' });
    }
    console.error("error: ", error.message);
    res.status(500).json({ error: error.message });
  }
};

const updateProduct = async (req, res) => {
  const prdId = req.params.prdId;
  const { product_code, product_name, product_description } = req.body;

  try {
    const response = await productService.updateProduct({ product_code, product_name, product_description }, prdId);
    
    // response
    res.status(201).json({
      message: 'Product updated successfully',
      data: response
    });
  } catch (error) {
    if (error.code === 'P2002') {
      return res.status(400).json({ error: 'Email or username already exist' });
    }
    res.status(500).json({ error: error.message });
  }
};

const destroyProduct = async (req, res) => {
  const { prdId } = req.params;

  try {
    const response = await productService.destroyProduct(prdId);
    
    // response
    res.status(200).json({
      message: 'Product deleted successfully',
      data: response
    });
  } catch (error) {
    console.error("error: ", error.message);
    res.status(500).json({ error: error.message });
  }
};

export default { getProduct, getProductById, createProduct, updateProduct, destroyProduct };
