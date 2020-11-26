import '@babel/polyfill';

const express = require('express');
const morgan = require('morgan');
const path = require('path');
const cors = require('cors');
const cookieParser = require('cookie-parser');

//inicialización

const app = express();

//settings

app.set('port', process.env.PORT || 4000);

//middlewares server

app.use(cookieParser());
app.use(cors());
app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}));
app.use(express.json());

//variables globales

app.use((req,res,next) => {
    next();
});

//Importar rutas

import roles from './routes/roles.js';
import users from './routes/users.js';
import auth from './routes/auth.js';
import bodegas from './routes/bodegas.js';
import correos from './routes/correos.js';
import cuentasCorrientes from './routes/cuentasCorrientes.js';
import departamentos from './routes/departamentos.js';
import detallesGastos from './routes/detallesGastos.js';


//routes

app.use('/users', users);
app.use('/auth', auth);
app.use('/roles', roles);
app.use('/bodegas', bodegas);
app.use('/correos', correos);
app.use('/cuentasCorrientes', cuentasCorrientes);
app.use('/departamentos', departamentos);
app.use('/detallesGastos', detallesGastos);

export default app;


