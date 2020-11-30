const express = require('express');
const router = express.Router();
import * as roles from '../controllers/roles.controller.js';

// roles

router.get('/', roles.getAllRoles);
router.put('/updateRoles', roles.updateRoles);

// roles/:cod_rol

router.get('/:cod_rol', roles.getRolesCodRol);

module.exports = router;