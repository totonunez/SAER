const express = require('express');
const router = express.Router();
import * as turnos from '../controllers/turnos.controller.js';

// turnos

router.get('/', turnos.getAllTurnos);

module.exports = router;