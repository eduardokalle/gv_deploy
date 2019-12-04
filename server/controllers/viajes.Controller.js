const Viaje  = require('../models/Viajes');

exports.queryViajes =  async (req,res) =>{
    const viajes = await Viaje.findAll()
       res.render('viajes', {
          pagina: 'Proximos Viajes',
          viajes
        });
  }

  exports.queryViaje = async (req,res) =>{
      const viaje = await Viaje.findByPk(req.params.id)
       res.render('viaje', {
              viaje
      });
  }