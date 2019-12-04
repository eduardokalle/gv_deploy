const express = require('express');
const  router = express.Router();

//controladoress
const homeController = require('../controllers/homeController');
const nosotrosController = require('../controllers/nosotrosController');
const viajesController = require('../controllers/viajes.Controller');
const testimonialesController = require('../controllers/teimonialesController');


module.exports = ()=>{

  router.get('/', homeController.queryHome);

  router.get('/nosotros', nosotrosController.infoNosotros);

  router.get('/viajes',viajesController.queryViajes );

  router.get('/viajes/:id',viajesController.queryViaje );

  router.get('/testimoniales', testimonialesController.querytestimoniales );

  router.post('/testimoniales', testimonialesController.inserttestimoniales);

  return router;
}