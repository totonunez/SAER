const express = require('express');
const router = express.Router();
import * as reclamos from '../controllers/reclamos.controller.js';

// reclamos

router.get('/', reclamos.getAllReclamos);

module.exports = router;