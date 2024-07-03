import express from 'express';
import {
  createSede,
  getSedes,
  getSede,
  updateSede,
  deleteSede,
} from '../controllers/sedeControllers.js';

const router = express.Router();

router.post('/newSede', createSede);
router.get('/sedes', getSedes);
router.get('/sede/:id', getSede);
router.put('/updateSede/:id', updateSede);
router.delete('/deleteSede/:id', deleteSede);

export default router;
