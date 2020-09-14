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

//routes

app.use('/',require('./routes'));
app.use(require('./routes/authentication'));
app.use('/links',require('./routes/links'));

//public

//app.use(express.static('../public'));

//starting del server

async function main() {
    await app.listen(app.get('port'), () => {
        console.log('server on port', app.get('port'));
    });
}

main();


