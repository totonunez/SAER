const express = require('express');
const router = express.Router();
import * as turnos from '../controllers/turnos.controller.js';

// turnos

router.get('/', turnos.getAllTurnos);
router.get('/getTurnosDia', turnos.getTurnosDia);
router.post('/createTurnos', turnos.createTurnos);
router.put('/updateTurnos', turnos.updateTurnos);
router.delete('/deleteTurnos', turnos.updateTurnos);


module.exports = router;