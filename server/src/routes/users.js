const express = require('express');
const router = express.Router();
import {getAllUsers, getUsersId, deleteUsers, updateUsers, relationDepto, relationReclamo, updateRelationDepto, updateRelationReclamo, updateRelationRoles} from '../controllers/users.controller';
import * as authJwt from '../middlewares/authJwt';

// users

router.get('/', getAllUsers);
router.post('/relationDepto', relationDepto);
router.post('/relationReclamo', relationReclamo);
router.put('/updateRelationDeptos', updateRelationDepto);
router.put('/updateRelationReclamos', updateRelationReclamo);
router.put('/updateRelationRoles', updateRelationRoles);


// users/:id

router.get('/:id', getUsersId);
router.delete('/:id', deleteUsers);
router.put('/:id', updateUsers);

module.exports = router;