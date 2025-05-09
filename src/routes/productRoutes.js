import express from 'express';
import productController from '../controllers/productController.js';
import upload from '../helpers/uploadHelper.js';

const router = express.Router();

// product controller
router.get('/products', productController.getProduct);
router.get('/products/:prdId', productController.getProductById);
router.post('/products', upload.array('images', 10), productController.createProduct);
router.put('/products/:prdId', productController.updateProduct);
router.delete('/products/:prdId', productController.destroyProduct);

export default router;
