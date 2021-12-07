const router = require('express').Router();

const Rutinas = require('../models/Rutinas');
const Dificultades = require('../models/Dificultades');

router.get('/:id', async (req, res) => {

    const {id} = req.params;
  
    const rutina = await Rutinas.findAll({
        where: {iddificultad: id},
        include:[
          {model: Dificultades}
        ]
    });
    res.json(rutina);
    console.log(rutina);
  })
  
  

  module.exports = router;