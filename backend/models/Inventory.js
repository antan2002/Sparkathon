const mongoose = require('mongoose');
const inventorySchema = new mongoose.Schema({
  productId: mongoose.Schema.Types.ObjectId,
  inStock: Boolean,
  storeLocation: String,
  deliveryETA: Number
});
module.exports = mongoose.model('Inventory', inventorySchema);