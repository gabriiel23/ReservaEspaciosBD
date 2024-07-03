import express from 'express';
import {
  createEspacio,
  getEspacios,
  getEspacio,
  updateEspacio,
  deleteEspacio,
} from '../controllers/espacioControllers.js';

const router = express.Router();

router.post('/new_espacio', createEspacio);
router.get('/espacios', getEspacios);
router.get('/espacio/:id', getEspacio);
router.put('/update_espacio/:id', updateEspacio);
router.delete('/delete_espacio/:id', deleteEspacio);

export default router;
