const express = require('express');
const router = express.Router();
import * as gastosComunes from '../controllers/gastosComunes.controller.js';

// gastosComunes

router.get('/', gastosComunes.getAllGastosComunes);

module.exports = router;