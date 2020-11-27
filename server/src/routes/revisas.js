const express = require('express');
const router = express.Router();
import * as revisas from '../controllers/revisas.controller.js';

// revisa

router.get('/', revisas.getAllRevisas);

module.exports = router;