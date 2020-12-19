const express = require('express');
const router = express.Router();
import * as supervisas from '../controllers/supervisas.controller.js';

// supervisas

router.get('/', supervisas.getAllSupervisas);
router.get('/:reclamos_id', supervisas.getSupervisasId);

module.exports = router;