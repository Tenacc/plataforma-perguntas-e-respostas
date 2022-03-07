const Sequelize = require('sequelize')

const connection = new Sequelize('guiaperguntas', 'root', 'Tagoba7411!', {
    host: 'localhost',
    dialect: 'mysql'
})

module.exports = connection;