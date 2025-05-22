const express = require('express');
const { getAllProducts, createProduct } = require('../controllers/productController');
const { protect } = require('../middleware/authMiddleware');
const { isAdmin } = require('../middleware/roleMiddleware');
const router = express.Router();

router.get('/', getAllProducts);

router.post('/', protect, isAdmin, createProduct);
// router.post('/', protect, createProduct);

module.exports = router;
