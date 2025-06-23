const express = require('express');
const router = express.Router();
const protect = require('../middleware/auth');
const { nutritionScore, priceOptimizer, recommend } = require('../controllers/aiController');

router.post('/nutrition', protect, nutritionScore);
router.post('/pricing', protect, priceOptimizer);
router.post('/recommend', protect, recommend);

module.exports = router;
