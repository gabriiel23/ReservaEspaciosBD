import express from 'express';
import {
  createEspacio,
  getEspacios,
  getEspacio,
  updateEspacio,
  deleteEspacio,
} from '../controllers/espacioControllers.js';

const router = express.Router();

router.post('/newEspacio', createEspacio);
router.get('/espacios', getEspacios);
router.get('/espacio/:id', getEspacio);
router.put('/updateEspacio/:id', updateEspacio);
router.delete('/deleteEspacio/:id', deleteEspacio);

export default router;
