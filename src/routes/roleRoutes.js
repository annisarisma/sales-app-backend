import express from 'express';
import roleController from '../controllers/roleController.js';
import upload from '../helpers/uploadHelper.js';

const router = express.Router();

// role controller
router.get('/roles', roleController.getRole);
router.get('/roles/:rolId', roleController.getRoleById);
router.post('/roles', upload.none(), roleController.createRole);
router.put('/roles/', upload.none(), roleController.updateRole);
router.delete('/roles/:rolId', roleController.destroyRole);

export default router;
