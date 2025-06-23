const mongoose = require('mongoose');

const PriceOptimizationSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  currentItem: {
    name: String,
    price: Number,
    quantity: Number
  },
  bestOption: {
    name: String,
    price: Number,
    quantity: Number
  },
  savedAmount: {
    type: Number,
    required: true
  },
  isCheaper: {
    type: Boolean,
    required: true
  },
  timestamp: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('PriceOptimization', PriceOptimizationSchema);
