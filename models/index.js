// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// Products belongsTo Category
Product.belongsTo(Category, {
  foreignKey: 'category_id',
});

// Categories have many Products
Category.hasMany(Product, {
  foreignKey: 'category_id',
  // Do not allow category to be deleted if there are still products in it
  onDelete: 'NO ACTION',
});

// Products belongToMany Tags (through ProductTag)
Product.belongsToMany(Tag, {
  through: ProductTag,
    foreignKey: "product_id",
    // Unique: false
  as: "tag_product",
});

// Tags belongToMany Products (through ProductTag)
Tag.belongsToMany(Product, {
  through: ProductTag,
  foreignKey: "tag_id",
  // Unique: false
  as: "tag_product",
});

// Export model relationships
module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
