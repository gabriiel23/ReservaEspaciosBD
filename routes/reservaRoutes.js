import express from 'express';
import {
  createReserva,
  getReservas,
  getReserva,
  updateReserva,
  deleteReserva,
} from '../controllers/reservaControllers.js';

const router = express.Router();

router.post('/new_reserva', createReserva);
router.get('/reservas', getReservas);
router.get('/reserva/:id', getReserva);
router.put('/update_reserva/:id', updateReserva);
router.delete('/delete_reserva/:id', deleteReserva);

export default router;
