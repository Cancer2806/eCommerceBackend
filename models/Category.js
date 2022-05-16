// Module to define the Category table model

// Import the required parts of sequelize library
const { Model, DataTypes } = require('sequelize');
// Import database connection from config.js
const sequelize = require('../config/connection.js');

// Initialize Category model (table) by extending off Sequelize's Model class
class Category extends Model { }

// Define the Category model
Category.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    category_name: {
      type: DataTypes.STRING,
      allowNull: false
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'category',
  }
);

// Export modules
module.exports = Category;
