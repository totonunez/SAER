const express = require('express');
const router = express.Router();
import {signIn, signUp} from '../controllers/auth.controller.js';
import * as verifySignUp from '../middlewares/verifySignUp.js';

// auth

router.post('/signin', signIn);
router.post('/signup', verifySignUp.verifyUser, signUp);

module.exports = router;