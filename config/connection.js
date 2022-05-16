// Module to define the connection to the database
const Sequelize = require('sequelize');
require('dotenv').config();


// Connect to mysql database
const sequelize = process.env.JAWSDB_URL
  ? new Sequelize(process.env.JAWSDB_URL)
  : new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PW, {
      host: 'localhost',
      dialect: 'mysql',
      dialectOptions: {
        decimalNumbers: true,
      },
    });


// Export required modules
module.exports = sequelize;
