// Module to define the table tracking many to many relationship Prouct / Tag

// Import the required parts of sequelize library
const { Model, DataTypes } = require('sequelize');
// Import database connection from config.js
const sequelize = require('../config/connection');

// Initialize Product_Tag model (table) by extending off Sequelize's Model class
class ProductTag extends Model { }

// Define foreign keys for Product and Tag
ProductTag.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    product_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'product',
        key: 'id',
        unique: false
      }
    },
    tag_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'tag',
        key: 'id',
        unique: false
      }
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'product_tag',
  }
);

// Export module
module.exports = ProductTag;
