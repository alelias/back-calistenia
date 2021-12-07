const router = require('express').Router();

const Instructores = require('../models/Instructores');

//const {body} = require('express-validator/check');


router.post('/', async (req, res) => {
      const {nombre} = req.body;
  
          const instructor = await Instructores.create({nombre});
          res.json(instructor);
          
});

router.get('/', async (req, res) => {
      const instructores = await Instructores.findAll();
      res.json(instructores);
});

router.get('/:id', async (req, res) => {

      const {id} = req.params;
    
      const instructor = await Instructores.findOne({
          where: {idinstructor: id}
      });
      res.json(instructor);
})

router.put( '/:id', async (req, res) => {

      const {id} = req.params;
    
      await Instructores.update(req.body, {
          where: {idinstructor: id}
      });
      res.json({success: 'se ha modificado'})
    });
    
    router.delete( '/:id', async (req, res) => {
    
      const {id} = req.params;
    
      await Instructores.destroy({
          where: {idinstructor: id}
      });
      res.json({success: 'Se ha borrado el instructor'});
    });

    
module.exports = router;