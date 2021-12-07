const router = require("express").Router();
const bcrypt = require('bcryptjs')
const Usuarios = require("../models/Usuarios");
const moment = require('moment');
const jwt = require('jwt-simple');

const {check, validationResult} = require('express-validator');

router.post("/",[
  check('nombre', 'El nombre de usuario es obligatorio').not().isEmpty(),
  check('password', 'El password es obligatorio').not().isEmpty(),
  check('correo', 'El correo es obligatorio').isEmail(),
],async (req, res) => {

  const errors = validationResult(req);
  if(!errors.isEmpty()){
    return res.status(422).json({errores: errors.array()})
  }

  req.body.password = bcrypt.hashSync(req.body.password, 10)

  const usuarios = await Usuarios.create(req.body);
  res.json(usuarios);
});


router.post('/login', async (req, res) => {
  const usuario = await Usuarios.findOne({
    where: {correo: req.body.correo}
  })

  if(usuario){
    const iguales = bcrypt.compareSync(req.body.password, usuario.password);
    if(iguales){
      res.json({success: createToken(usuario)})
    }else{
      res.json({error: 'Error en usuario y/ contraseña'})
    }
  }else{
    res.json({error: 'Error en usuario y/ contraseña'})
  }
})

const createToken = (usuario) => {
  const payload = {
    usuarioId: usuario.idusuario,
    createdAt: moment().unix(),
    expiredAt: moment().add(5,'minutes').unix()
  }
  return jwt.encode(payload, 'secreto')
}

router.get("/", async (req, res) => {
  const usuarios = await Usuarios.findAll();
  res.json(usuarios);
});

router.get("/:id", async (req, res) => {
  const { id } = req.params;

  const usuarios = await Usuarios.findOne({
    where: { idusuario: id },
  });
  res.json(usuarios);
});

router.put("/:id", async (req, res) => {
  const { id } = req.params;

  await Usuarios.update(req.body, {
    where: { idusuario: id },
  });
  res.json({ success: "se ha modificado" });
});

router.delete("/:id", async (req, res) => {
  const { id } = req.params;

  await Usuarios.destroy({
    where: { idusuario: id },
  });
  res.json({ success: "Se ha borrado el usuario" });
});

module.exports = router;
