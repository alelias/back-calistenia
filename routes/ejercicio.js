const router = require('express').Router();

const Ejercicios = require('../models/Ejercicios');
const Dificultades = require('../models/Dificultades');

//const {body} = require('express-validator/check');


router.post('/', async (req, res) => {
      const {nombre, descripcion, link, iddificultad} = req.body;
      const createdAt = ""
      const updatedAt = ""
  
        const ejercicio = await Ejercicios.create({nombre, descripcion, link, createdAt, updatedAt, iddificultad});
        res.json(ejercicio);
          
});

router.get('/', async (req, res) => {

    const ejercicios = await Ejercicios.findAll({
      include:[
        {model: Dificultades}
      ]
    });

  res.json(ejercicios);
});

router.get('/contador', async (req, res) => {
  const ejercicios = await Ejercicios.findAndCountAll();
  res.json(ejercicios);
});

router.get('/ultimo', async (req, res) => {
  const ejercicios = await Ejercicios.findAll(
    {
      order:[
        ['createdAt', 'DESC']
      ],
      limit: 1
    }
  );
  res.json(ejercicios);
});

router.get('/:id', async (req, res) => {

  const {id} = req.params;

  const ejercicio = await Ejercicios.findOne({
      where: {idejercicio: id},
      include:[
        {model: Dificultades}
      ]
  });
  res.json(ejercicio);

})

router.get('/dificultad/:id', async (req, res) => {

  const {id} = req.params;

  const ejercicio = await Ejercicios.findOne({
      where: {iddificultad: id},
      include:[
        {model: Dificultades}
      ]
  });
  res.json(ejercicio);
  console.log(ejercicio);
})

router.put( '/:id', async (req, res) => {

  const {id} = req.params;

  await Ejercicios.update(req.body, {
      where: {idejercicio: id}
  });
  res.json({success: 'se ha modificado'})
});

router.delete( '/:id', async (req, res) => {

  const {id} = req.params;

  await Ejercicios.destroy({
      where: {idejercicio: id}
  });
  res.json({success: 'Se ha borrado el ejercicio'});
});

  
module.exports = router;