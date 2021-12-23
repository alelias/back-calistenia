const express = require("express");
const cors = require("cors");
require('dotenv').config();

const app = express();

//const middlewareUsuario = require("./middlewares/usuarios");

const noticiaRouter = require("./routes/noticia");
const parqueRouter = require("./routes/parque");
const usuarioRouter = require("./routes/usuario");
const dificultadRouter = require("./routes/dificultad");
const ejercicioRouter = require("./routes/ejercicio");
const eventoRouter = require("./routes/evento");
const rutinaRouter = require("./routes/rutina");
const ejerciciodificultadRouter = require("./routes/ejerciciodificultad");
const rutinadificultadRouter = require("./routes/rutinadificultad");
const loginRouter = require("./routes/login");

const db = require("./config/db");

require("./models/Noticias");
require("./models/Dificultades");
require("./models/Ejercicios");
require("./models/Eventos");
require("./models/Parques");
require("./models/Rutinas");
require("./models/Usuarios");

db.sync()
  .then(() => console.log("Conectando"))
  .catch((error) => console.log(error));

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use("/api/noticia", noticiaRouter);
app.use("/api/parque", parqueRouter);
app.use("/api/usuario", usuarioRouter);
app.use("/api/dificultad", dificultadRouter);
app.use("/api/ejercicio", ejercicioRouter);
app.use("/api/evento", eventoRouter);
app.use("/api/rutina", rutinaRouter);
app.use("/api/ejerciciodificultad", ejerciciodificultadRouter);
app.use("/api/rutinadificultad", rutinadificultadRouter);
app.use("/api/login", loginRouter);

app.listen(process.env.PORT || 5000);
