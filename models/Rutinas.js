const Sequelize = require('sequelize');

const db = require('../config/db')
const Dificultades = require('./Dificultades');

const Rutinas = db.define('rutinas', {
    idrutina: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nombre: {
        type: Sequelize.STRING
    },
    descripcion: {
        type: Sequelize.TEXT
    },
    link: {
        type: Sequelize.STRING
    },
});

Rutinas.belongsTo(Dificultades, {foreignKey: 'iddificultad'});

module.exports = Rutinas;