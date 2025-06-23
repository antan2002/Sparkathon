const express = require('express');
const router = express.Router();
const { register, login } = require('../controllers/userController');
const { getCart, addToCart } = require('../controllers/cartController');
const auth = require('../middleware/auth');

router.post('/register', register);
router.post('/login', login);
router.get('/cart', auth, getCart);
router.post('/cart', auth, addToCart);

module.exports = router;
