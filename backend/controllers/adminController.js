const Product = require('../models/Product');
const Inventory = require('../models/Inventory');
const Nutrition = require('../models/NutritionScore');

exports.createProduct = async (req, res) => {
  const product = await Product.create(req.body);
  res.json(product);
};

exports.updateProduct = async (req, res) => {
  const product = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(product);
};

exports.uploadNutrition = async (req, res) => {
  const nutrition = await Nutrition.create(req.body);
  res.json(nutrition);
};

exports.updateInventory = async (req, res) => {
  const inventory = await Inventory.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(inventory);
};