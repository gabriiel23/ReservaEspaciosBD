import express from 'express';
import {
  createFacultad,
  getFacultad,
  getFacultades,
  updateFacultad,
  deleteFacultad,
} from '../controllers/facultadController.js';

const router = express.Router();

router.get('/facultades', getFacultades);
router.post('/newFacultad', createFacultad);
router.get('/facultad/:id', getFacultad);
router.put('/updateFacultad/:id', updateFacultad);
router.delete('/deleteFacultad/:id', deleteFacultad);

export default router;
