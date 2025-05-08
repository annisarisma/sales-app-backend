import express from 'express';
import categoryController from '../controllers/categoryController.js';

const router = express.Router();

// category controller
router.get('/categories', categoryController.getCategory);
router.get('/categories/:catId', categoryController.getCategoryById);
router.post('/categories', categoryController.createCategory);
router.put('/categories/:catId', categoryController.updateCategory);
router.delete('/categories/:catId', categoryController.destroyCategory);

export default router;
