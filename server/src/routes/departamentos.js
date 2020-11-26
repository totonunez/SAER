const express = require('express');
const router = express.Router();
import * as departamentos from '../controllers/departamentos.controller.js';

// departamentos

router.get('/', departamentos.getAllDepartamentos);

module.exports = router;