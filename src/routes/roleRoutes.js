import express from 'express';
import roleController from '../controllers/roleController.js';

const router = express.Router();

// role controller
router.get('/roles', roleController.getRole);
router.get('/roles/:rolId', roleController.getRoleById);
router.post('/roles', roleController.createRole);
router.put('/roles/:rolId', roleController.updateRole);
router.delete('/roles/:rolId', roleController.destroyRole);

export default router;
