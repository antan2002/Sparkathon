const Cart = require('../models/Cart');

exports.getCart = async (req, res) => {
  const cart = await Cart.findOne({ userId: req.user.id });
  res.json(cart);
};

exports.addToCart = async (req, res) => {
  const { productId, quantity } = req.body;
  let cart = await Cart.findOne({ userId: req.user.id });
  if (!cart) cart = await Cart.create({ userId: req.user.id, items: [] });
  const existingItem = cart.items.find(i => i.productId.equals(productId));
  if (existingItem) existingItem.quantity += quantity;
  else cart.items.push({ productId, quantity });
  await cart.save();
  res.json(cart);
};