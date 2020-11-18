const express = require('express');
const router = express.Router();
import {signIn, signUp} from '../controllers/auth.controller.js';
import * as verifySignUp from '../middlewares/verifySignUp.js';
import * as authJwt from '../middlewares/authJwt';

// auth

router.get('/', authJwt.verifyToken);
router.post('/adm/', authJwt.administrador);
router.post('/sup/', authJwt.superUsuario);
router.post('/usr/', authJwt.usuario);
router.post('/signin', signIn);
router.post('/signup', verifySignUp.verifyUser, signUp);


module.exports = router;