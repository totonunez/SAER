const express = require('express');
const router = express.Router();
import {signIn, signUp, administrador, superUsuario, usuario} from '../controllers/auth.controller.js';
import * as verifySignUp from '../middlewares/verifySignUp.js';
import * as authJwt from '../middlewares/authJwt';

// auth

router.get('/', authJwt.verifyToken);
router.get('/adm/', administrador);
router.get('/sup/', superUsuario);
router.get('/usr/', usuario);
router.post('/signin', signIn);
router.post('/signup', verifySignUp.verifyUser, signUp);


module.exports = router;