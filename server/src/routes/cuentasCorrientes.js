const express = require('express');
const router = express.Router();
import * as cuentasCorrientes from '../controllers/cuentasCorrientes.controller.js';

// cuentasCorrientes

router.get('/', cuentasCorrientes.getAllCuentasCorrientes);

module.exports = router;