import express from 'express';
import materialController from '../controllers/materialController.js';
import upload from '../helpers/uploadHelper.js';

const router = express.Router();

// material controller
router.get('/materials', materialController.getMaterial);
router.get('/materials/:matId', materialController.getMaterialById);
router.post('/materials', upload.array('images', 10), materialController.createMaterial);
router.put('/materials', upload.array('images', 10), materialController.updateMaterial);
router.delete('/materials/:matId', materialController.destroyMaterial);

export default router;
