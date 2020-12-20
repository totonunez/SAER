const express = require('express');
const router = express.Router();
import * as bodegas from '../controllers/bodegas.controller.js';


// bodegas

router.get('/', bodegas.getAllbodegas);
router.get('/:n_bodega', bodegas.getbodegasId);



module.exports = router;