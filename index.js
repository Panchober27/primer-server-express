
/*

//Servidor creado mediante NodeJS puro.

const http = require('http');

http.createServer((req,res) => {
    res.end('Hello World');
}).listen(3000);
*/

//------------------------------------------------------------------------------------


//Servideor creado con Express

const express = require('express');
const app = express();

const morgan = require('morgan'); //requiriendo el modulo morgan.
/*
    estas son las rutas que se crean en el servidor, poner ojo en ('/') ya que esa es la
    ruta que estaremos indicando viajar!

    de tarea queda ver como insertar documentos html en estas rutas.
    para luego convertir esos html en documentos responsive.
*/


//settings
app.set('appName', 'Mi primer server');
app.set('views', __dirname,'views');
//+ __dirname + '/views

console.log();

app.set('view engine', 'ejs');

//middlewares
//app.use(morgan('combined'));

/*
app.use(function (req,res, next)  {
    console.log('request url:' + req.url);
    next();
});



//Funcion semaforo.
app.use((req,res,next) =>{
    console.log('ha pasado por esta funcion');
    next();
})

*/
//rutas a tratar

app.get('/', (req, res) => {
    res.render('./views/index.ejs');
});

//res.end('Aqui va el login');
app.get('/login', (req,res) => {
    res.render('./views/login.ejs');
});

app.get('/menu',(req,res) => {
    res.render('./views/menu.ejs');
});

//Esta ruta debe ser la uitlma del codigo!!
//Esta ruta no existe. 
app.get('*', (req,res) => {
    res.end('Archivo no encontrado');
});

app.listen(3000, () => {
    console.log('Servidor Funcionando');
    console.log('Nombre de la App: ' + app.get('appName'));
});