import express from 'express';
import {
  createReserva,
  getReservas,
  getReserva,
  updateReserva,
  deleteReserva,
} from '../controllers/reservaControllers.js';

const router = express.Router();

router.post('/newReserva', createReserva);
router.get('/reservas', getReservas);
router.get('/reserva/:id', getReserva);
router.put('/updateReserva/:id', updateReserva);
router.delete('/deleteReserva/:id', deleteReserva);

export default router;
