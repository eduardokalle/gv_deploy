// importa express
  const express = require ('express');
  const path = require('path');
  const bodyParser = require('body-parser');
  const routes = require('./routes');
  const configs = require('./config');

  require('dotenv').config({path : 'variables.env'});


/*
db.authenticate()
    .then(() => console.log('BD CONNECT'))
    .catch(error => console.log(error));
*/

//conf express
const app = express();

//habilitar pug
app.set('view engine','pug');

//añadir las vistas
app.set('views', path.join(__dirname,'./views'));

//cargar carpeta estatica public
app.use(express.static('public'));

//validar si estamos en produccion 
const config = configs[app.get('env')];

//variable del sitio web
app.locals.titulo = config.nombresitio;

//mustra el año actual
app.use((req, res, next)=>{
      //crear fecha
      const fechaActual = new Date();
      res.locals.fechaActual= fechaActual.getFullYear();
      res.locals.ruta= req.path;
      return  next();

})

//ejecutar body-parser
app.use(bodyParser.urlencoded({extended : true}));
 
//load routes
app.use('/', routes());

//puerto y host app

const host = process.env.HOST || '0.0.0.0';
const port = process.env.PORT || '5000';

//escucha en el port 5000 
app.listen(port , host , () => {
  console.log('coneect');
});
