const axios = require('axios');
const mongoose = require('mongoose');
const NutritionScore = require('../models/NutritionScore');
const PriceOptimization = require('../models/PriceOptimization');
const Recommendation = require('../models/Recommendation');

const FASTAPI_URL = 'http://127.0.0.1:8000'; // Always use IPv4 to avoid ::1 errors

// --------- Nutrition AI ---------
exports.nutritionScore = async (req, res) => {
  try {
    const { userId, productName, nutrition } = req.body;

    if (!userId || !productName || !nutrition) {
      return res.status(400).json({ error: "Missing required fields" });
    }


    const aiRes = await axios.post(`${FASTAPI_URL}/health_score`, nutrition);
    const { health_score, level, suggestion } = aiRes.data;

    await NutritionScore.create({
      userId: new mongoose.Types.ObjectId(userId),
      productName,
      inputValues: nutrition,
      healthScore: health_score,
      healthLevel: level,
      suggestion
    });

    return res.status(200).json({ health_score, level, suggestion });

  } catch (error) {
    console.error("Nutrition AI Error:", error.message);
    return res.status(500).json({ error: "Internal Server Error" });
  }
};

// --------- Pricing Optimizer ---------
exports.priceOptimizer = async (req, res) => {
  try {
    const { userId, current, alternatives } = req.body;

    if (!userId || !current || !alternatives || alternatives.length === 0) {
      return res.status(400).json({ error: "Missing pricing data" });
    }

    const aiRes = await axios.post(`${FASTAPI_URL}/pricing_optimizer`, { current, alternatives });
    const { recommended, saving, is_cheaper } = aiRes.data;

    await PriceOptimization.create({
      userId: new mongoose.Types.ObjectId(userId),
      currentItem: current,
      bestOption: recommended,
      savedAmount: saving,
      isCheaper: is_cheaper
    });

    return res.status(200).json({ recommended, saving, is_cheaper });

  } catch (error) {
    console.error("Pricing AI Error:", error.message);
    return res.status(500).json({ error: "Internal Server Error" });
  }
};

// --------- Recommendation Engine ---------
exports.recommend = async (req, res) => {
  try {
    const { userId, history } = req.body;

    if (!userId || !history || history.length === 0) {
      return res.status(400).json({ error: "Missing userId or history" });
    }


    const aiRes = await axios.post(`${FASTAPI_URL}/recommend`, { user_history: history });
    const { recommendations } = aiRes.data;

    await Recommendation.create({
      userId: new mongoose.Types.ObjectId(userId),
      history,
      recommendations
    });

    return res.status(200).json({ recommendations });

  } catch (error) {
    console.error("Recommender AI Error:", error.message);
    return res.status(500).json({ error: "Internal Server Error" });
  }
};
