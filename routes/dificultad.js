const router = require('express').Router();

const Dificultades = require('../models/Dificultades');

//const {body} = require('express-validator/check');


router.post('/', async (req, res) => {
      const {nombre} = req.body;
      const createdAt = ""
      const updatedAt = ""
  
          const dificultad = await Dificultades.create({nombre, createdAt,updatedAt});
          res.json(dificultad);
          
});

router.get('/', async (req, res) => {
      const dificultades = await Dificultades.findAll();
      res.json(dificultades);
});

router.get('/:id', async (req, res) => {

      const {id} = req.params;
    
      const dificultad = await Dificultades.findOne({
          where: {iddificultad: id}
      });
      res.json(dificultad);
})

router.put( '/:id', async (req, res) => {

      const {id} = req.params;
    
      await Dificultades.update(req.body, {
          where: {iddificultad: id}
      });
      res.json({success: 'se ha modificado'})
    });
    
    router.delete( '/:id', async (req, res) => {
    
      const {id} = req.params;
    
      await Dificultades.destroy({
          where: {iddificultad: id}
      });
      res.json({success: 'Se ha borrado la dificultad'});
    });
    
  
module.exports = router;