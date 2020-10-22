const express = require('express');
const router = express.Router();
import {getAllUsers, getUsersId, deleteUsers, updateUsers} from '../controllers/users.controller';
import {authJwt} from '../middlewares';

// users

router.get('/', getAllUsers);

// users/:id

router.get('/:id', [authJwt.verifyToken, authJwt.superUsuario], getUsersId);
router.delete('/:id', deleteUsers);
router.put('/:id', updateUsers);

module.exports = router;