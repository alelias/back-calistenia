const router = require("express").Router();
const bcrypt = require('bcryptjs')
const Usuarios = require("../models/Usuarios");
//const moment = require('moment');
//const jwt = require('jwt-simple');

router.post('/', async (req, res) => {
  const {correo, password} = req.body;
  console.log(correo);
    const usuario = await Usuarios.findOne({
      where: {correo: correo}
    })
  
    if(usuario){
      const iguales = bcrypt.compareSync(password, usuario.password);
      if(iguales){
        res.status(200).send('OK')
      }else{
        res.status(405).send('Correo y clave incorrecta')
      }
    }else{
      res.status(500).json({msj: "Incorrecto"})
    }
  })
  /*
  const createToken = (usuario) => {
    const payload = {
      usuarioId: usuario.idusuario,
      createdAt: moment().unix(),
      expiredAt: moment().add(5,'minutes').unix()
    }
    return jwt.encode(payload, 'secreto')
  }

  */

  module.exports = router;