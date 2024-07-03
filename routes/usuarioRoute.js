import express from 'express';
import {
  createUsuario,
  getUsuario,
  getUsuarios,
  updateUsuario,
  deleteUsuario,
} from '../controllers/usuarioController.js';

const router = express.Router();

router.get('/usuarios', getUsuarios);
router.post('/newUsuario', createUsuario);
router.get('/usuario/:id', getUsuario);
router.put('/updateUsuario/:id', updateUsuario);
router.delete('/deleteUsuario/:id', deleteUsuario);

export default router;
