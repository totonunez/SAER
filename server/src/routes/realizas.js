const express = require('express');
const router = express.Router();
import * as realizas from '../controllers/realizas.controller.js';

// realizas

router.get('/', realizas.getAllRealizas);

module.exports = router;