const Sequelize = require('sequelize');

const db = require('../config/db')

const Dificultades = db.define('dificultades', {
    iddificultad: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nombre: {
        type: Sequelize.STRING
    }
});

module.exports = Dificultades;