const express = require('express');
const {getAllProducts, createProduct, getProductById, updateProduct, deleteProduct} = require('../controllers/productoController');

const router = express.Router();

router.get('/', getAllProducts);
router.post('/', createProduct);
router.get('/:id', getProductById);
router.put('/:id', updateProduct);
router.delete('/:id', deleteProduct);

module.exports = router;