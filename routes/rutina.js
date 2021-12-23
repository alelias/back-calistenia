const router = require('express').Router();

const Rutinas = require('../models/Rutinas');
const Dificultades = require('../models/Dificultades');

//const {body} = require('express-validator/check');


router.post('/', async (req, res) => {
      const {nombre, descripcion,link, iddificultad} = req.body;
      const createdAt = ""
      const updatedAt = ""
  
        const rutina = await Rutinas.create({nombre, descripcion, link,createdAt,updatedAt, iddificultad});
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

router.get('/contador', async (req, res) => {
  const rutinas = await Rutinas.findAndCountAll();
  res.json(rutinas);
});

router.get('/ultimo', async (req, res) => {
  const rutinas = await Rutinas.findAll(
    {
      order:[
        ['createdAt', 'DESC']
      ],
      limit: 1
    }
  );
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