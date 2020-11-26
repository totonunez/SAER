const express = require('express');
const router = express.Router();
import * as correos from '../controllers/correos.controller.js';

// correos

router.get('/', correos.getAllCorreos);

module.exports = router;