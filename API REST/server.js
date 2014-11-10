var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var app = express();

// Llamamos a la base de datos
// seriestv es la bd
mongoose.connect('mongodb://localhost/materiales', function(err,res){
	if(err) console.log('ERROR: Conectando a la BD: ' + err);
	else console.log('Conexión a la BD realizada');
});

// Configuración del servidor
// parse application/x-www-form-urlencoded
app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
})); 

// Le indicamos que cuando se haga una llamada a nuestro servidor 
// la recoja con el método GET.
// req es la petición, res es la respuesta
// Cuando hagamos localhost:5000/ es decir la raiz mandará hola mundo
// Dependiendo de la ruta que pongamos enviará un json que será con otra aplicación cliente
// puede ser movil, aplicación web con angular, backbone, jquery a secas ó javascript reciba sus
// json los parsee y haga lo que tenga que hacer.
app.get('/', function(req, res){
	res.send('Hola, Mundo!');
});

// Esto llama al fichero routes.js
require('./routes')(app);

app.listen(5000);
console.log('Servidor Express escuchando en el puerto 5000');
