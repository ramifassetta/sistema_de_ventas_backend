import express from 'express';
import categoriasController from '../controllers/categoriasController.js';

const router = express.Router();

router.get('/', categoriasController.getAllCategories);
router.post('/', categoriasController.createCategory);
router.get('/:id', categoriasController.getCategoryById);
router.put('/:id', categoriasController.updateCategory);
router.delete('/:id', categoriasController.deleteCategory);

export default router;
