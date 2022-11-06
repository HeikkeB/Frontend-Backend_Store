const { Sequelize } = require('sequelize')

module.exports = new Sequelize(
  process.env.DB_NAME, //name database
  process.env.DB_USER, //user database
  process.env.DB_PASSWORD, //pass database
  {
    dialect: 'postgres',
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
  }
)
