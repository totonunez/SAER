const express = require('express');
const router = express.Router();
import * as productos from '../controllers/productos.controller.js';

// productos

router.get('/', productos.getAllProductos);
router.post('/', productos.createProductos);
router.delete('/:cod_prod', productos.deleteProductos);
router.put('/', productos.updateProductos);

module.exports = router;