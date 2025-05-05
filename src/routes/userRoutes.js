import express from 'express';
import userController from '../controllers/userController.js';

const router = express.Router();

// Mengakses createUserController dari objek yang diekspor
router.post('/users', userController.createUserController);

export default router;
