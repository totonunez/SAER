const express = require('express');
const router = express.Router();
import * as correos from '../controllers/correos.controller.js';

// correos

router.get('/', correos.getAllCorreos);
router.get('/getCorreoUserId', correos.getCorreoUserId);
router.post('/createCorreos', correos.createCorreos);
router.put('/updateCorreos', correos.updateCorreos);

// correos/:id

router.delete('/:id', correos.deleteCorreos);

module.exports = router;