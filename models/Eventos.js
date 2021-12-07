const Sequelize = require('sequelize');

const db = require('../config/db')
const Instructores = require('./Instructores');
const Eventos = db.define('eventos', {
    idevento: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nombre: {
        type: Sequelize.STRING
    },
    fecha: {
        type: Sequelize.DATEONLY
    },
    descripcion: {
        type: Sequelize.TEXT
    },
});

Eventos.belongsTo(Instructores, {foreignKey: 'idinstructor'});

module.exports = Eventos;


 