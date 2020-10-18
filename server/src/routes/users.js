const express = require('express');
const router = express.Router();
import {createUsers, getAllUsers, getUsersId, deleteUsers, updateUsers} from '../controllers/users.controller';

// users

router.post('/', createUsers);
router.get('/', getAllUsers);

// users/:id

router.get('/:id', getUsersId);
router.delete('/:id', deleteUsers);
router.put('/:id', updateUsers);

module.exports = router;