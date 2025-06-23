const mongoose = require('mongoose');
const productSchema = new mongoose.Schema({
  name: String,
  price: Number,
  brand: String,
  quantity: Number,
  unit: String
});
module.exports = mongoose.model('Product', productSchema);
