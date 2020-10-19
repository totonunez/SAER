const express = require('express');
const router = express.Router();
import {signIn, signUp} from '../controllers/auth.controller.js';

router.post('/signin/', signIn);
router.post('/signup', signUp);

module.exports = router;