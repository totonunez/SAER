const express = require('express');
const router = express.Router();
import * as productos from '../controllers/productos.controller.js';

// productos

router.get('/', productos.getAllProductos);

module.exports = router;