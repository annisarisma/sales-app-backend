import express from 'express';
import categoryController from '../controllers/categoryController.js';
import upload from '../helpers/uploadHelper.js';

const router = express.Router();

// category controller
router.get('/categories', categoryController.getCategory);
router.get('/categories/:catId', categoryController.getCategoryById);
router.post('/categories', upload.none(), categoryController.createCategory);
router.put('/categories', upload.none(), categoryController.updateCategory);
router.delete('/categories/:catId', categoryController.destroyCategory);

export default router;
