import express from 'express';
import {
  createNotificacion,
  getNotificacion,
  getNotificaciones,
  updateNotificacion,
  deleteNotificacion,
} from '../controllers/notificacionController.js';

const router = express.Router();

router.get('/notificaciones', getNotificaciones);
router.post('/newNotificacion', createNotificacion);
router.get('/notificacion/:id', getNotificacion);
router.put('/updateNotificacion/:id', updateNotificacion);
router.delete('/deleteNotificacion/:id', deleteNotificacion);

export default router;
