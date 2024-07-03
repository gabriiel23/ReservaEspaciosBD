import express from 'express';
import {
  createResenia,
  getResenias,
  getResenia,
  updateResenia,
  deleteResenia,
} from '../controllers/reseniaControllers.js';

const router = express.Router();

router.post('/newResenia', createResenia);
router.get('/resenias', getResenias);
router.get('/resenia/:id', getResenia);
router.put('/updateResenia/:id', updateResenia);
router.delete('/deleteResenia/:id', deleteResenia);

export default router;
