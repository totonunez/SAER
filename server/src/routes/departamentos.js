const express = require('express');
const router = express.Router();
import * as departamentos from '../controllers/departamentos.controller.js';

// departamentos

router.get('/', departamentos.getAllDepartamentos);
router.post('/createDepartamentos', departamentos.createDepartamentos);
router.put('/updateDepartamentos', departamentos.updateDepartamentos);

// departamentos/:n_depto

router.get('/:n_depto', departamentos.getDepartamentosNdepto);

module.exports = router;