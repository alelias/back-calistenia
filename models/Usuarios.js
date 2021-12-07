const Sequelize = require('sequelize');

const db = require('../config/db');
const Perfiles = require('./Perfiles');

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
    }
});

Usuarios.belongsTo(Perfiles, {foreignKey: 'idperfil'});

module.exports = Usuarios;