const Testimonial  = require('../models/Testimoniales');

exports.querytestimoniales = async (req,res) =>{
     const testimoniales = await Testimonial.findAll()
        res.render('testimoniales', {
         pagina: 'Testimoniales',
         testimoniales
       })
     
   }

   exports.inserttestimoniales = async  (req,res) =>{

    //validar campos completos
    let{nombre , correo , mensaje} = req.body;

    let errores = [];

    if (!nombre) {
      errores.push({'mensajes' : 'Agrega tu Nombre '})
    }
    if (!correo) {
      errores.push({'mensajes' : 'Agrega tu Correo '})
    }else 
    if (!mensaje) {
      errores.push({'mensajes' : 'Agrega tu Mensaje '})
    }

   //revisar errores

    if (errores.length > 0) {
     //vista error
     const testimoniales = await Testimonial.findAll()
     res.render('testimoniales',{
       errores,
       nombre,
       correo,
       mensaje,
       pagina: 'Testimoniales',
         testimoniales
     })
     
    }else{
    //almacenar bd
     Testimonial.create({
       nombre,
       correo,
       mensaje
     })
     .then(testimonial => res.redirect('/testimoniales'))
     .catch(error => console.log(error));
    }

    }