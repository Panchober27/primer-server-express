
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
app.set('views', __dirname + '/views');
//+ __dirname + '/views

console.log();

app.set('view engine', 'ejs');

app.use(express.json());
app.use(express.urlencoded({extended: false }));

//Bootstrap
app.use(express.static(__dirname + '/public'));




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
    res.render('index');
});

//res.end('Aqui va el login');
app.get('/login', (req,res) => {
    res.render('login');
});

app.get('/menu',(req,res) => {
    res.render('menu');
});


app.post('/login_handler', (req,res,next) =>{
    const reqBody = req.body;
    console.log(reqBody);

    /*
        Tratando de validar que se hayan llenado los campos.
    */
    if(!reqBody.username === '' || !reqBody.password === ''){
        if(reqBody.username === 'franciscoignaciob2106@gmail.com' || reqBody.password === 'pancho'){
            res.render('menu');
        }
    } else {
        next();
    }


    //Forma anterior, la que deje echa con Japus.
    /*
    if(reqBody.password === "pancho"){
        res.render('menu'); // res.send -> la vista manejara la respuesta
    } else {
        next();
    }
    */
});

//Esta ruta debe ser la uitlma del codigo!!
//Esta ruta no existe. 
app.get('*', (req,res) => {
    res.end('Archivo no encontrado');
});

app.post('*', (req,res) => {
    res.end('Archivo no encontrado');
});


app.listen(3000, () => {
    console.log('Servidor Funcionando');
    console.log('Nombre de la App: ' + app.get('appName'));
});

/*
    app.use(express.static(path.join(__dirname, 'public')));
    Sirve todo el contenido que tenga addentro la carpeta public.

*/