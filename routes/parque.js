const router = require('express').Router();

const Parques = require('../models/Parques');

//const {body} = require('express-validator/check');


router.post('/', async (req, res) => {
      const {nombre, latitud, longitud, descripcion} = req.body;
      const createdAt = ""
      const updatedAt = ""

      const parque = await Parques.create({nombre, latitud, longitud, descripcion, createdAt, updatedAt});
      res.json(parque);
      
          
});

router.get('/', async (req, res) => {
    const parques = await Parques.findAll();
    res.json(parques);
});

router.get('/contador', async (req, res) => {
    const parques = await Parques.findAndCountAll();
    res.json(parques);
  });
  
  router.get('/ultimo', async (req, res) => {
    const parques = await Parques.findAll(
      {
        order:[
          ['createdAt', 'DESC']
        ],
        limit: 1
      }
    );
    res.json(parques);
  });

router.get('/:id', async (req, res) => {

    const {id} = req.params;
  
    const parque = await Parques.findOne({
        where: {idparque: id}
    });
    res.json(parque);
})

router.put( '/:id', async (req, res) => {

    const {id} = req.params;
  
    await Parques.update(req.body, {
        where: {idparque: id}
    });
    res.json({success: 'se ha modificado'})
  });
  
  router.delete( '/:id', async (req, res) => {
  
    const {id} = req.params;
  
    await Parques.destroy({
        where: {idparque: id}
    });
    res.json({success: 'Se ha borrado el parque'});
  });

  
module.exports = router;