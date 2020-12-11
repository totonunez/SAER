const express = require('express');
const router = express.Router();
import * as movimientos from '../controllers/movimientos.controller.js';

// movimientos

router.get('/', movimientos.getAllMovimientos);
router.post('/createMovimientos', movimientos.createMovimientos);
router.put('/updateMovimientos', movimientos.updateMovimientos);
router.delete('/:id', movimientos.deleteMovimientos);

// movimientos/:cuentas_corrientes_id

router.get('/:cuentas_corrientes_id', movimientos.getMovimientosCuentasCorrientesId);

module.exports = router;