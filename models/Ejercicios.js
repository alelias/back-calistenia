const Sequelize = require('sequelize');

const db = require('../config/db')

const Dificultades = require('./Dificultades');

const Ejercicios = db.define('ejercicios', {
    idejercicio: {
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

Ejercicios.belongsTo(Dificultades, {foreignKey: 'iddificultad'});

module.exports = Ejercicios;