const express = require('express');
const router = express.Router();
import {getAllUsers, getUsersId, deleteUsers, updateUsers, relationDepto, relationReclamo, updateRelationDepto, updateRelationReclamo} from '../controllers/users.controller';
import * as authJwt from '../middlewares/authJwt';

// users

router.get('/', getAllUsers);
router.post('/relationDepto', relationDepto);
router.post('/relationReclamo', relationReclamo);
router.put('/depto', updateRelationDepto);
router.put('/reclamos', updateRelationReclamo);

// users/:id

router.get('/:id', [authJwt.verifyToken, authJwt.administrador], getUsersId);
router.delete('/:id', deleteUsers);
router.put('/:id', updateUsers);

module.exports = router;