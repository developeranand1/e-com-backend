const express = require('express');
const { createCategory, getCategories, addSubCategory, deleteCategory } = require('../controllers/categoryController');
const { protect } = require('../middleware/authMiddleware');
const { isAdmin } = require('../middleware/roleMiddleware');

const router = express.Router();

router.get('/', getCategories);
router.post('/', protect, isAdmin, createCategory);
router.put('/sub', protect, isAdmin, addSubCategory);
router.delete('/:id', protect, isAdmin, deleteCategory);

module.exports = router;
