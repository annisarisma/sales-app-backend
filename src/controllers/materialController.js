import materialService from '../services/materialService.js';

const getMaterial = async (req, res) => {
  try {
    const response = await materialService.getMaterial();
    res.status(200).json(response);
  } catch (error) {
    console.error("error: ", error.message);
    res.status(404).json({ message: 'Get user was failed' });
  }
};

const getMaterialById = async (req, res) => {
  try {
    const response = await materialService.getMaterialById(req.params.matId);
    res.status(200).json(response);
  } catch (error) {
    console.error("error: ", error.message);
    res.status(404).json({ message: 'Get user was failed' });
  }
};

const createMaterial = async (req, res) => {
  const { unt_id, sup_id, material_code, material_brand, material_name } = req.body;

  try {
    const response = await materialService.createMaterial({ unt_id, sup_id, material_code, material_brand, material_name });

    //  response
    res.status(201).json({
      message: 'Material created successfully',
      data: response
    });
  } catch (error) {
    if (error.code === 'P2002') {
      return res.status(400).json({ error: 'Material already exist' });
    }
    console.error("error: ", error.message);
    res.status(500).json({ error: error.message });
  }
};

const updateMaterial = async (req, res) => {
  const matId = req.body.matId;
  const { unt_id, sup_id, material_code, material_brand, material_name } = req.body;

  try {
    const response = await materialService.updateMaterial({ unt_id, sup_id, material_code, material_brand, material_name }, matId);
    
    // response
    res.status(201).json({
      message: 'Material updated successfully',
      data: response
    });
  } catch (error) {
    if (error.code === 'P2002') {
      return res.status(400).json({ error: 'Email or username already exist' });
    }
    res.status(500).json({ error: error.message });
  }
};

const destroyMaterial = async (req, res) => {
  const { matId } = req.params;

  try {
    const response = await materialService.destroyMaterial(matId);
    
    // response
    res.status(200).json({
      message: 'Material deleted successfully',
      data: response
    });
  } catch (error) {
    console.error("error: ", error.message);
    res.status(500).json({ error: error.message });
  }
};

export default { getMaterial, getMaterialById, createMaterial, updateMaterial, destroyMaterial };
