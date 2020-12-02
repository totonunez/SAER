const express = require('express');
const router = express.Router();
import * as cuentasCorrientes from '../controllers/cuentasCorrientes.controller.js';

// cuentasCorrientes

router.get('/', cuentasCorrientes.getAllCuentasCorrientes);
router.post('/createCuentasCorrientes', cuentasCorrientes.createCuentasCorrientes);
router.put('/updateCuentasCorrientes', cuentasCorrientes.updateCuentasCorrientes);
router.delete('/deleteCuentasCorrientes', cuentasCorrientes.deleteCuentasCorrientes);

// cuentasCorrientes/:n_cuenta

router.get('/:n_cuenta', cuentasCorrientes.getCuentasCorrientesNcuenta);

module.exports = router;