const express = require('express');
const router = express.Router();
import {createUsers} from '../controllers/users.controller';

router.post('/', createUsers);

module.exports = router;