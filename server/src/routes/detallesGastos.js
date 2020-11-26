const express = require('express');
const router = express.Router();
import * as detallesGastos from '../controllers/detallesGastos.controller.js';

// detallesGastos

router.get('/', detallesGastos.getAllDetallesGastos);

module.exports = router;