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

router.get('/categories', getCategorys);
router.post('/new_category', createCategory);
router.post('/new_sub_category', createSubCategory);
router.get('/category/:id', getCategory);
router.put('/update_category/:id', updateCategory);
router.delete('/delete_category/:id', deleteCategory);

export default router;