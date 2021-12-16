const Sequelize = require('sequelize');

const db = require('../config/db')
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


module.exports = Eventos;


 