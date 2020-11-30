const express = require('express');
const router = express.Router();
import * as reclamos from '../controllers/reclamos.controller.js';

// reclamos

router.get('/', reclamos.getAllReclamos);
router.post('/createReclamos', reclamos.createReclamos);
router.put('/createReclamos', reclamos.updateReclamos);

// reclamos/n_reclamo

router.post('/:n_reclamo', reclamos.getReclamosNreclamo);

module.exports = router;