import express from 'express';
import {
  createResenia,
  getResenias,
  getResenia,
  updateResenia,
  deleteResenia,
} from '../controllers/reseniaControllers.js';

const router = express.Router();

router.post('/new_resenia', createResenia);
router.get('/resenias', getResenias);
router.get('/resenia/:id', getResenia);
router.put('/update_resenia/:id', updateResenia);
router.delete('/delete_resenia/:id', deleteResenia);

export default router;
