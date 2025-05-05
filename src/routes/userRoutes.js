import express from 'express';
import userController from '../controllers/userController.js';

const router = express.Router();

// User Controller
router.get('/users', userController.getUser);
router.get('/users/:id', userController.getUserById);
router.post('/users', userController.createUser);

export default router;
