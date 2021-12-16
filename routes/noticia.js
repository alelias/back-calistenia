const router = require('express').Router();

const Noticias = require('../models/Noticias');


//const {body} = require('express-validator/check');


router.post('/', async (req, res) => {
    const {titulo, descripcion} = req.body;
    const createdAt = ""
      const updatedAt = ""
  
    const noticia = await Noticias.create({titulo, descripcion, createdAt, updatedAt});
    res.json(noticia);
          
});

router.get('/', async (req, res) => {
      const noticias = await Noticias.findAll();
      res.json(noticias);
});

router.get('/:id', async (req, res) => {

    const {id} = req.params;
  
    const noticia = await Noticias.findOne({
        where: {idnoticia: id}
    });
    res.json(noticia);
})

router.put( '/:id', async (req, res) => {

    const {id} = req.params;
  
    await Noticias.update(req.body, {
        where: {idnoticia: id}
    });
    res.json({success: 'se ha modificado'})
  });
  
  router.delete( '/:id', async (req, res) => {
  
    const {id} = req.params;
  
    await Noticias.destroy({
        where: {idnoticia: id}
    });
    res.json({success: 'Se ha borrado la noticia'});
  });

  
module.exports = router;