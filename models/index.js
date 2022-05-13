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
  // Do not want to allow category to be deleted if there are still products in it
  onDelete: 'NOACTION',
});

// Products belongToMany Tags (through ProductTag)
Product.belongsToMany(Tag, {
  through: {
  model: ProductTag,
    Unique: false
  },
  // TODO decide if an alias is needed
});

// Tags belongToMany Products (through ProductTag)
Tag.belongsToMany(Product, {
  through: {
    model: ProductTag,
    Unique: false
  },
  // TODO decide if an alias is needed
});

// Export model relationships
module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
