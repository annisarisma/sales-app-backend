import express from 'express';
import userController from '../controllers/userController.js';
import roleController from '../controllers/roleController.js';

const router = express.Router();

// authentication
router.post('/login', userController.loginUser);

// user controller
router.get('/users', userController.getUser);
router.get('/users/:usrId', userController.getUserById);
router.post('/users', userController.createUser);
router.put('/users/:usrId', userController.updateUser);
router.delete('/users/:usrId', userController.destroyUser);

// role controller
router.get('/roles', roleController.getRole);
router.post('/roles', roleController.getRole);

export default router;
