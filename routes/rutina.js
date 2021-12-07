const router = require('express').Router();

const Rutinas = require('../models/Rutinas');
const Dificultades = require('../models/Dificultades');

//const {body} = require('express-validator/check');


router.post('/', async (req, res) => {
      const {nombre, descripcion,link, iddificultad} = req.body;
  
        const rutina = await Rutinas.create({nombre, descripcion, link, iddificultad});
        res.json(rutina);
          
});

router.get('/', async (req, res) => {

    const rutinas = await Rutinas.findAll({
      include:[
        {model: Dificultades}
      ]
    });

  res.json(rutinas);
});

router.get('/:id', async (req, res) => {

  const {id} = req.params;

  const rutina = await Rutinas.findOne({
      where: {idrutina: id},
      include:[
        {model: Dificultades}
      ]
  });
  res.json(rutina);
})

router.put( '/:id', async (req, res) => {

  const {id} = req.params;

  await Rutinas.update(req.body, {
      where: {idrutina: id}
  });
  res.json({success: 'se ha modificado'})
});

router.delete( '/:id', async (req, res) => {

  const {id} = req.params;

  await Rutinas.destroy({
      where: {idrutina: id}
  });
  res.json({success: 'Se ha borrado la rutina'});
});

  
module.exports = router;