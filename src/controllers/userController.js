import userService from '../services/userService.js';

const getUser = async (req, res) => {
  try {
    const response = await userService.getUser();
    res.status(200).json(response);
  } catch (error) {
    console.error("Error getting user: ", error.message);
    res.status(404).json({ message: 'get user was failed' });
  }
};

const getUserById = async (req, res) => {
  try {
    const response = await userService.getUserById(req.params.id);
    res.status(200).json(response);
  } catch (error) {
    console.error("Error getting user: ", error.message);
    res.status(404).json({ message: 'get user was failed' });
  }
};

const createUser = async (req, res) => {
  const { username, email, first_name, last_name, phone_number, address } = req.body;

  try {
    const newUser = await userService.createUser({ username, email, first_name, last_name, phone_number, address });
    res.status(201).json(newUser);
  } catch (error) {
    console.error(error);
    if (error.code === 'P2002') {
      return res.status(400).json({ error: 'Email sudah terdaftar' });
    }
    console.error('Error saat menambahkan user:', error)
    res.status(500).json({ error: 'Gagal menambahkan user' });
  }
};

export default { getUser, getUserById, createUser };
