import userService from '../services/userService.js';

const loginUser = async (req, res) => {
  const { username, email, password } = req.body;

  try {
    const response = await userService.authenticateUser({username, email, password});
    res.status(200).json({
      message: 'Login successfully',
      data: response.user,
      token: response.token
    })
  } catch (error) {
    console.error("error: ", error.message);
    res.status(404).json({ message: error.message });
  }
}

const getUser = async (req, res) => {
  try {
    const response = await userService.getUser();
    res.status(200).json(response);
  } catch (error) {
    console.error("error: ", error.message);
    res.status(404).json({ message: 'Get user was failed' });
  }
};

const getUserById = async (req, res) => {
  try {
    const response = await userService.getUserById(req.params.usrId);
    res.status(200).json(response);
  } catch (error) {
    console.error("error: ", error.message);
    res.status(404).json({ message: 'Get user was failed' });
  }
};

const createUser = async (req, res) => {
  const { username, email, password } = req.body;

  try {
    const response = await userService.createUser({ username, email, password });

    //  response
    res.status(201).json({
      message: 'User created successfully',
      data: response
    });
  } catch (error) {
    if (error.code === 'P2002') {
      return res.status(400).json({ error: 'Email or username already exist' });
    }
    console.error("error: ", error.message);
    res.status(500).json({ error: error.message });
  }
};

const updateUser = async (req, res) => {
  const usrId = req.params.usrId;
  const { username, email, password } = req.body;

  try {
    const response = await userService.updateUser({ username, email, password }, usrId);
    
    // response
    res.status(201).json({
      message: 'User updated successfully',
      data: response
    });
  } catch (error) {
    if (error.code === 'P2002') {
      return res.status(400).json({ error: 'Email or username already exist' });
    }
    res.status(500).json({ error: error.message });
  }
};

const destroyUser = async (req, res) => {
  const { usrId } = req.params;

  try {
    const response = await userService.destroyUser(usrId);
    
    // response
    res.status(200).json({
      message: 'User deleted successfully',
      data: response
    });
  } catch (error) {
    console.error("error: ", error.message);
    res.status(500).json({ error: error.message });
  }
};

export default { loginUser, getUser, getUserById, createUser, updateUser, destroyUser };
