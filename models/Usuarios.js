const Sequelize = require('sequelize');

const db = require('../config/db');

const Usuarios = db.define('usuarios', {
    idusuario: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nombre: {
        type: Sequelize.STRING
    },
    correo: {
        type: Sequelize.STRING
    },
    password: {
        type: Sequelize.STRING
    },
    perfil: {
        type: Sequelize.STRING
    }
});

module.exports = Usuarios;