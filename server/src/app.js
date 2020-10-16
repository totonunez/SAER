const express = require('express');
const morgan = require('morgan');
const path = require('path');

//inicialización

const app = express();

//settings

app.set('port', process.env.PORT || 4000);

//middlewares

app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}));
app.use(express.json());

//variables globales

app.use((req,res,next) => {
    next();
});

//Importar rutas

import users from './routes/users.js';

//routes

app.use('/users', users);

//public

//app.use(express.static('../public'));

export default app;


