import roleService from '../services/roleService.js';

const getRole = async (req, res) => {
  try {
    const response = await roleService.getRole();
    res.status(200).json(response);
  } catch (error) {
    console.error("error: ", error.message);
    res.status(404).json({ message: 'Get user was failed' });
  }
};

const getRoleById = async (req, res) => {
  try {
    const response = await roleService.getRoleById(req.params.rolId);
    res.status(200).json(response);
  } catch (error) {
    console.error("error: ", error.message);
    res.status(404).json({ message: 'Get user was failed' });
  }
};

const createRole = async (req, res) => {
  const { role_code, role_name, role_description } = req.body;

  try {
    const response = await roleService.createRole({ role_code, role_name, role_description });

    //  response
    res.status(201).json({
      message: 'Role created successfully',
      data: response
    });
  } catch (error) {
    if (error.code === 'P2002') {
      return res.status(400).json({ error: 'Role already exist' });
    }
    console.error("error: ", error.message);
    res.status(500).json({ error: error.message });
  }
};

const updateRole = async (req, res) => {
  const rolId = req.params.rolId;
  const { role_code, role_name, role_description } = req.body;

  try {
    const response = await roleService.updateRole({ role_code, role_name, role_description }, rolId);
    
    // response
    res.status(201).json({
      message: 'Role updated successfully',
      data: response
    });
  } catch (error) {
    if (error.code === 'P2002') {
      return res.status(400).json({ error: 'Email or username already exist' });
    }
    res.status(500).json({ error: error.message });
  }
};

const destroyRole = async (req, res) => {
  const { rolId } = req.params;

  try {
    const response = await roleService.destroyRole(rolId);
    
    // response
    res.status(200).json({
      message: 'Role deleted successfully',
      data: response
    });
  } catch (error) {
    console.error("error: ", error.message);
    res.status(500).json({ error: error.message });
  }
};

export default { getRole, getRoleById, createRole, updateRole, destroyRole };
