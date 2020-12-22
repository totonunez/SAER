const express = require('express');
const router = express.Router();
import * as turnos from '../controllers/turnos.controller.js';

// turnos

router.get('/', turnos.getAllTurnos);
router.get('/getTurnosUser', turnos.getTurnosUser);
router.post('/createTurnos', turnos.createTurnos);
router.put('/updateTurnos', turnos.updateTurnos);
router.delete('/:id', turnos.deleteTurnos);


module.exports = router;