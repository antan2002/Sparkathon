
const express = require('express');
const router = express.Router();

const auth = require('../middleware/auth');
const isAdmin = require('../middleware/isAdmin');
const {
    adminLogin,
    createProduct,
    updateProduct,
    uploadNutrition,
    updateInventory,
    createInventory,
    bulkAddInventory
} = require('../controllers/adminController');

router.post('/login', adminLogin);
router.use(auth, isAdmin);
router.post('/product', createProduct);
router.put('/product/:id', updateProduct);
router.post('/nutrition', uploadNutrition);
router.post('/inventory', createInventory);
router.post('/inventory/bulk', bulkAddInventory);
router.put('/inventory/:id', updateInventory);

module.exports = router;

