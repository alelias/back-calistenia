const router = require("express").Router();

const Perfiles = require("../models/Perfiles");

//const {body} = require('express-validator/check');

router.post("/", async (req, res) => {
  const { nombre } = req.body;

  const perfiles = await Perfiles.create({ nombre });
  res.json(perfiles);
});

router.get("/", async (req, res) => {
  const perfiles = await Perfiles.findAll();
  res.json(perfiles);
});

router.get("/:id", async (req, res) => {
  const { id } = req.params;

  const perfil = await Perfiles.findOne({
    where: { idperfil: id },
  });
  res.json(perfil);
});

router.put("/:id", async (req, res) => {
  const { id } = req.params;

  await Perfiles.update(req.body, {
    where: { idperfil: id },
  });
  res.json({ success: "se ha modificado" });
});

router.delete("/:id", async (req, res) => {
  const { id } = req.params;

  await Perfiles.destroy({
    where: { idperfil: id },
  });
  res.json({ success: "Se ha borrado el perfil" });
});

module.exports = router;
