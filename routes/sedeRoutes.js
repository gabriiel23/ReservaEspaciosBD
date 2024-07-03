import express from 'express';
import {
  createSede,
  getSedes,
  getSede,
  updateSede,
  deleteSede,
} from '../controllers/sedeControllers.js';

const router = express.Router();

router.post('/new_sede', createSede);
router.get('/sedes', getSedes);
router.get('/sede/:id', getSede);
router.put('/update_sede/:id', updateSede);
router.delete('/delete_sede/:id', deleteSede);

export default router;
