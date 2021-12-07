const router = require('express').Router();

const Eventos = require('../models/Eventos');
const Instructores = require('../models/Instructores');

//const {body} = require('express-validator/check');

router.post('/', async (req, res) => {
      const {nombre, fecha, descripcion, idinstructor} = req.body;
  
          const evento = await Eventos.create({nombre,fecha, descripcion, idinstructor});
          res.json(evento);
          
});

router.get('/', async (req, res) => {
      const eventos = await Eventos.findAll({
        include:[
          {model: Instructores}
        ]
      });
      res.json(eventos);
});

router.get('/:id', async (req, res) => {

      const {id} = req.params;
    
      const evento = await Eventos.findOne({
          where: {idevento: id},
          include:[
            {model: Instructores}
          ]
      });
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