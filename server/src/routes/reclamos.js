const express = require('express');
const router = express.Router();
import * as reclamos from '../controllers/reclamos.controller.js';

// reclamos

router.get('/', reclamos.getAllReclamos);
router.post('/', reclamos.createReclamos);

module.exports = router;