const Sequelize = require('sequelize');

const db = require('../config/db')

const Instructores = db.define('instructores', {
    idinstructor: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nombre: {
        type: Sequelize.STRING
    }
});

module.exports = Instructores;