const router = require('express').Router();

const Ejercicios = require('../models/Ejercicios');
const Dificultades = require('../models/Dificultades');

router.get('/:id', async (req, res) => {

    const {id} = req.params;
  
    const ejercicio = await Ejercicios.findAll({
        where: {iddificultad: id},
        include:[
          {model: Dificultades}
        ]
    });
    res.json(ejercicio);
    console.log(ejercicio);
  })
  
  

  module.exports = router;