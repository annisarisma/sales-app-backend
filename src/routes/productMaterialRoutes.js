import express from 'express';
import productMaterialController from '../controllers/productMaterialController.js';
import upload from '../helpers/uploadHelper.js';

const router = express.Router();

// productMaterial controller
router.get('/productMaterials', productMaterialController.getProductMaterial);
router.get('/productMaterials/:pmtId', productMaterialController.getProductMaterialById);
router.post('/productMaterials', upload.none(), productMaterialController.createProductMaterial);
router.put('/productMaterials/', upload.none(), productMaterialController.updateProductMaterial);
router.delete('/productMaterials/:pmtId', productMaterialController.destroyProductMaterial);

export default router;
