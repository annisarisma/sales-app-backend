import userService from '../services/userService.js';

const createUserController = async (req, res) => {
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

export default { createUserController };
