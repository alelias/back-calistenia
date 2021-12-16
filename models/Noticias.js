const Sequelize = require('sequelize');
const moment = require('moment')

const db = require('../config/db')

const Noticias = db.define('noticias', {
    idnoticia: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    titulo: {
        type: Sequelize.STRING
    },
    descripcion: {
        type: Sequelize.TEXT
    }
});

module.exports = Noticias;