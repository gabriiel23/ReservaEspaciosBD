import express from 'express';

import {
  createCategory,
  getCategory,
  getCategorys,
  updateCategory,
  deleteCategory,
  createSubCategory,
} from '../controllers/categoriaController.js';

const router = express.Router();

router.get('/categorias', getCategorys);
router.post('/newCategoria', createCategory);
router.post('/newSubCategoria', createSubCategory);
router.get('/categoria/:id', getCategory);
router.put('/updateCategoria/:id', updateCategory);
router.delete('/deleteCategoria/:id', deleteCategory);

export default router;