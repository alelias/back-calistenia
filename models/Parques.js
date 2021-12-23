const Sequelize = require('sequelize');

const db = require('../config/db')

const Parques = db.define('parques', {
    idparque: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nombre: {
        type: Sequelize.STRING
    },
    latitud: {
        type: Sequelize.DOUBLE
    },
    longitud: {
        type: Sequelize.DOUBLE
    },
    descripcion: {
        type: Sequelize.TEXT
    }
});

module.exports = Parques;