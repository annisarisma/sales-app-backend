import unitService from '../services/unitService.js';

const getUnit = async (req, res) => {
  try {
    const response = await unitService.getUnit();
    res.status(200).json(response);
  } catch (error) {
    console.error("error: ", error.message);
    res.status(404).json({ message: 'Get user was failed' });
  }
};

const getUnitById = async (req, res) => {
  try {
    const response = await unitService.getUnitById(req.params.untId);
    res.status(200).json(response);
  } catch (error) {
    console.error("error: ", error.message);
    res.status(404).json({ message: 'Get user was failed' });
  }
};

const createUnit = async (req, res) => {
  const { unit_code, unit_name } = req.body;


  try {
    const response = await unitService.createUnit({ unit_code, unit_name });

    //  response
    res.status(201).json({
      message: 'Unit created successfully',
      data: response
    });
  } catch (error) {
    if (error.code === 'P2002') {
      return res.status(400).json({ error: 'Unit already exist' });
    }
    console.error("error: ", error.message);
    res.status(500).json({ error: error.message });
  }
};

const updateUnit = async (req, res) => {
  const untId = req.body.untId;
  const { unit_code, unit_name } = req.body;

  try {
    const response = await unitService.updateUnit({ unit_code, unit_name }, untId);
    
    // response
    res.status(201).json({
      message: 'Unit updated successfully',
      data: response
    });
  } catch (error) {
    if (error.code === 'P2002') {
      return res.status(400).json({ error: 'Email or username already exist' });
    }
    res.status(500).json({ error: error.message });
  }
};

const destroyUnit = async (req, res) => {
  const { untId } = req.params;

  try {
    const response = await unitService.destroyUnit(untId);
    
    // response
    res.status(200).json({
      message: 'Unit deleted successfully',
      data: response
    });
  } catch (error) {
    console.error("error: ", error.message);
    res.status(500).json({ error: error.message });
  }
};

export default { getUnit, getUnitById, createUnit, updateUnit, destroyUnit };
