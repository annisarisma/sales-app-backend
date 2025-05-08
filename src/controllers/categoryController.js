import categoryService from '../services/categoryService.js';

const getCategory = async (req, res) => {
  try {
    const response = await categoryService.getCategory();
    res.status(200).json(response);
  } catch (error) {
    console.error("error: ", error.message);
    res.status(404).json({ message: 'Get user was failed' });
  }
};

const getCategoryById = async (req, res) => {
  try {
    const response = await categoryService.getCategoryById(req.params.catId);
    res.status(200).json(response);
  } catch (error) {
    console.error("error: ", error.message);
    res.status(404).json({ message: 'Get user was failed' });
  }
};

const createCategory = async (req, res) => {
  const { category_code, category_name } = req.body;

  try {
    const response = await categoryService.createCategory({ category_code, category_name });

    //  response
    res.status(201).json({
      message: 'Category created successfully',
      data: response
    });
  } catch (error) {
    if (error.code === 'P2002') {
      return res.status(400).json({ error: 'Category code already exist' });
    }
    console.error("error: ", error.message);
    res.status(500).json({ error: error.message });
  }
};

const updateCategory = async (req, res) => {
  const catId = req.params.catId;
  const { category_code, category_name } = req.body;

  try {
    const response = await categoryService.updateCategory({ category_code, category_name }, catId);
    
    // response
    res.status(201).json({
      message: 'Category updated successfully',
      data: response
    });
  } catch (error) {
    if (error.code === 'P2002') {
      return res.status(400).json({ error: 'Category code already exist' });
    }
    res.status(500).json({ error: error.message });
  }
};

const destroyCategory = async (req, res) => {
  const { catId } = req.params;

  try {
    const response = await categoryService.destroyCategory(catId);
    
    // response
    res.status(200).json({
      message: 'Category deleted successfully',
      data: response
    });
  } catch (error) {
    console.error("error: ", error.message);
    res.status(500).json({ error: error.message });
  }
};

export default { getCategory, getCategoryById, createCategory, updateCategory, destroyCategory };
