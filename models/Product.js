const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
 name: String,
  description: String,
  price: Number,
  countInStock: Number,
  imageUrl: String,
  category: String,
  subcategory: String
});

module.exports = mongoose.model('Product', productSchema);
