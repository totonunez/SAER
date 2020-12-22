const express = require('express');
const router = express.Router();
import * as gastosComunes from '../controllers/gastosComunes.controller.js';

// gastosComunes

router.get('/', gastosComunes.getAllGastosComunes);
router.post('/createGastosComunes', gastosComunes.createGastosComunes);
router.put('/updateGastosComunes', gastosComunes.updateGastosComunes);
router.put('/updateEstadoGastosComunes', gastosComunes.updateEstadoGastosComunes);
router.get('/id', gastosComunes.getGastosComunesUsersId);

// gastosComunes/:id

router.put('/deleteGastosComunes', gastosComunes.deleteGastosComunes);

// gastosComunes/:fecha_ingreso

router.get('/:fecha_ingreso', gastosComunes.getGastosComunesFechaIngreso);

module.exports = router;