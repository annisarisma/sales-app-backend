import express from 'express';
import userController from '../controllers/userController.js';

const router = express.Router();

// authentication
router.post('/login', userController.loginUser);

// user controller
router.get('/users', userController.getUser);
router.get('/users/:id', userController.getUserById);
router.post('/users', userController.createUser);
router.put('/users/:id', userController.updateUser);

// role controller
router.get('/roles', userController.getUser);
router.get('/roles/:id', userController.getUserById);
router.post('/roles', userController.createUser);
router.put('/roles/:id', userController.updateUser);

export default router;
