const mongoose = require('mongoose');

const NutritionScoreSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  productName: {
    type: String,
    required: true
  },
  inputValues: {
    calories: { type: Number },
    protein: { type: Number },
    fiber: { type: Number },
    sugar: { type: Number }
  },
  healthScore: {
    type: Number,
    required: true
  },
  healthLevel: {
    type: String,
    enum: ['High', 'Medium', 'Low'],
    required: true
  },
  suggestion: {
    type: String,
    required: true
  },
  timestamp: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('NutritionScore', NutritionScoreSchema);
