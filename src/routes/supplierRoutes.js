import express from 'express';
import supplierController from '../controllers/supplierController.js';
import upload from '../helpers/uploadHelper.js';

const router = express.Router();

// supplier controller
router.get('/suppliers', supplierController.getSupplier);
router.get('/suppliers/:supId', supplierController.getSupplierById);
router.post('/suppliers', upload.none(), supplierController.createSupplier);
router.put('/suppliers/', upload.none(), supplierController.updateSupplier);
router.delete('/suppliers/:supId', supplierController.destroySupplier);

export default router;
