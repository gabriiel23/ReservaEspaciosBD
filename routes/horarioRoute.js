import express from 'express';
import {
  createHorario,
  getHorario,
  getHorarios,
  updateHorario,
  deleteHorario,
} from '../controllers/horarioController.js';

const router = express.Router();

router.get('/horarios', getHorarios);
router.post('/newHorario', createHorario);
router.get('/horario/:id', getHorario);
router.put('/updateHorario/:id', updateHorario);
router.delete('/deleteHorario/:id', deleteHorario);

export default router;
