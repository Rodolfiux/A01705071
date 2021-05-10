console.log('hola mundo');
console.log('nodemon es un loquillo');
console.log('cualquier cambio, se ejecuta luego luego');

const express = require('express');
const app = express();

const rutasLimones = require('./routes/limones');
const rutasUsuarios = require('./routes/usuarios');

const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const session = require('express-session');

const path = require('path'); 

app.set('view engine', 'ejs');
app.set('views', 'views');


app.use(bodyParser.urlencoded({extended: false}));

app.use(cookieParser());

app.use(session({
    secret: 'nwndsknsdcjkm3245rdjsn', 
    resave: false, //La sesión no se guardará en cada petición, sino sólo se guardará si algo cambió 
    saveUninitialized: false, //Asegura que no se guarde una sesión para una petición que no lo necesita
}));

app.use(express.static(path.join(__dirname, 'public')));

//Middleware
app.use((request, response, next) => {
    console.log('Middleware!');
    next(); //Le permite a la petición avanzar hacia el siguiente middleware
});

app.use('/limones', rutasLimones);

app.use('/usuarios', rutasUsuarios);

app.use('/ruta/verdes', (request, response, next) => {
    response.send('Respuesta de la ruta "/ruta/verdes"'); 
});

app.use('/ruta', (request, response, next) => {
    response.send('Respuesta de la ruta "/ruta"'); 
});

app.get('/', (request, response, next) => {
    response.send('Bienvenido al mejor mejor arbol de limones'); 
});

app.use((request, response, next) => {
    console.log('Error 404');
    response.status(404);
    response.send('Lo sentimos te equivocaste de rama no hay limones'); //Manda la respuesta
});

app.listen(3000);