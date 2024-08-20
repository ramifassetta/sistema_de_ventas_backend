import express from 'express';
import productosController from '../controllers/productosController.js';

const router = express.Router();

router.get('/', productosController.getAllProducts);
router.post('/', productosController.createProduct);
router.get('/:id', productosController.getProductById);
router.put('/:id', productosController.updateProduct);
router.delete('/:id', productosController.deleteProduct);

export default router;