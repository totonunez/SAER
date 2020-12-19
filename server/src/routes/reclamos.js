const express = require('express');
const router = express.Router();
import * as reclamos from '../controllers/reclamos.controller.js';

// reclamos

router.get('/', reclamos.getAllReclamos);
router.post('/createReclamos', reclamos.createReclamos);
router.put('/updateReclamos', reclamos.updateReclamos);

// reclamos/n_reclamo

router.get('/:n_reclamo', reclamos.getReclamosNreclamo);

module.exports = router;