const router = require('express').Router();

const Eventos = require('../models/Eventos');

//const {body} = require('express-validator/check');

router.post('/', async (req, res) => {
      const {nombre, fecha, descripcion} = req.body;
      const createdAt = ""
      const updatedAt = ""
  
          const evento = await Eventos.create({nombre,fecha, descripcion,createdAt,updatedAt});
          res.json(evento);
          
});

router.get('/', async (req, res) => {
      const eventos = await Eventos.findAll();
      res.json(eventos);
});

router.get('/:id', async (req, res) => {

      const {id} = req.params;
    
      const evento = await Eventos.findOne({
          where: {idevento: id}});
      res.json(evento);
    })

    router.put( '/:id', async (req, res) => {

      const {id} = req.params;
    
      await Eventos.update(req.body, {
          where: {idevento: id}
      });
      res.json({success: 'se ha modificado'})
    });
    
    router.delete( '/:id', async (req, res) => {
    
      const {id} = req.params;
    
      await Eventos.destroy({
          where: {idevento: id}
      });
      res.json({success: 'Se ha borrado el evento'});
    });
    
  
module.exports = router;