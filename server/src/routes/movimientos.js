const express = require('express');
const router = express.Router();
import * as movimientos from '../controllers/movimientos.controller.js';

// movimientos

router.get('/', movimientos.getAllMovimientos);

module.exports = router;