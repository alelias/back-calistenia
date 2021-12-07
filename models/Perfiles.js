const Sequelize = require('sequelize');

const db = require('../config/db')

const Perfiles = db.define('perfiles', {
    idperfil: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nombre: {
        type: Sequelize.STRING
    }
});

module.exports = Perfiles;