const express = require("express");
const cors = require("cors");

const app = express();

const middlewareUsuario = require("./middlewares/usuarios");

const instructorRouter = require("./routes/instructor");
const noticiaRouter = require("./routes/noticia");
const parqueRouter = require("./routes/parque");
const perfilRouter = require("./routes/perfil");
const usuarioRouter = require("./routes/usuario");
const dificultadRouter = require("./routes/dificultad");
const ejercicioRouter = require("./routes/ejercicio");
const eventoRouter = require("./routes/evento");
const rutinaRouter = require("./routes/rutina");
const ejerciciodificultadRouter = require("./routes/ejerciciodificultad");
const rutinadificultadRouter = require("./routes/rutinadificultad");

const db = require("./config/db");

require("./models/Noticias");
require("./models/Dificultades");
require("./models/Ejercicios");
require("./models/Eventos");
require("./models/Instructores");
require("./models/Parques");
require("./models/Perfiles");
require("./models/Rutinas");
require("./models/Usuarios");

db.sync({force: true})
  .then(() => console.log("Conectando"))
  .catch((error) => console.log(error));

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use("/api/instructor", instructorRouter);
app.use("/api/noticia", noticiaRouter);
app.use("/api/parque",middlewareUsuario.checkToken, parqueRouter);
app.use("/api/perfil", perfilRouter);
app.use("/api/usuario", usuarioRouter);
app.use("/api/dificultad", dificultadRouter);
app.use("/api/ejercicio", ejercicioRouter);
app.use("/api/evento", eventoRouter);
app.use("/api/rutina", rutinaRouter);
app.use("/api/ejerciciodificultad", ejerciciodificultadRouter);
app.use("/api/rutinadificultad", rutinadificultadRouter);

app.listen(4500);
