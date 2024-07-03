import express from 'express';
import {
  createAutentificacion,
  getAutentificacion,
  getAutentificaciones,
  updateAutentificacion,
  deleteAutentificacion,
} from '../controllers/autentificacionController.js';

const router = express.Router();

router.get('/autentificaciones', getAutentificaciones);
router.post('/newAutentificacion', createAutentificacion);
router.get('/autentificacion/:id', getAutentificacion);
router.put('/updateAutentificacion/:id', updateAutentificacion);
router.delete('/deleteAutentificacion/:id', deleteAutentificacion);

export default router;
