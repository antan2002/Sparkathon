const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const isAdmin = require('../middleware/isAdmin');
const { createProduct, updateProduct, uploadNutrition, updateInventory } = require('../controllers/adminController');

router.use(auth, isAdmin);
router.post('/product', createProduct);
router.put('/product/:id', updateProduct);
router.post('/nutrition', uploadNutrition);
router.put('/inventory/:id', updateInventory);

module.exports = router;