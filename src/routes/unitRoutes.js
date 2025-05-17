import express from 'express';
import unitController from '../controllers/unitController.js';
import upload from '../helpers/uploadHelper.js';

const router = express.Router();

// unit controller
router.get('/units', unitController.getUnit);
router.get('/units/:untId', unitController.getUnitById);
router.post('/units', upload.none(), unitController.createUnit);
router.put('/units/', upload.none(), unitController.updateUnit);
router.delete('/units/:untId', unitController.destroyUnit);

export default router;
