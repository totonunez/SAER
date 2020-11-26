const express = require('express');
const router = express.Router();
import * as bodegas from '../controllers/bodegas.controller.js';


// bodegas

router.get('/', bodegas.getAllbodegas);



module.exports = router;