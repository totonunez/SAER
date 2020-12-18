const express = require('express');
const router = express.Router();
import * as detallesGastos from '../controllers/detallesGastos.controller.js';

// detallesGastos

router.get('/', detallesGastos.getAllDetallesGastos);
router.post('/createDetallesGastos', detallesGastos.createDetallesGastos);
router.put('/updateDetallesGastos', detallesGastos.updateDetallesGastos);
router.delete('/deleteDetallesGastos/:gastos_comunes_id', detallesGastos.deleteDetallesGastos);

// detallesGastos/gastos_comunes_id

router.get('/:gastos_comunes_id', detallesGastos.getDetallesGastosId);

module.exports = router;