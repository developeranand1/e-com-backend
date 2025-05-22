const Category = require('../models/Category');

exports.createCategory = async (req, res) => {
  const category = await Category.create(req.body);
  res.status(201).json(category);
};

exports.getCategories = async (req, res) => {
  const categories = await Category.find();
  res.json(categories);
};

exports.addSubCategory = async (req, res) => {
  const { categoryId, subcategory } = req.body;
  const category = await Category.findById(categoryId);
  if (!category) return res.status(404).json({ message: 'Category not found' });
  category.subcategories.push(subcategory);
  await category.save();
  res.json(category);
};

exports.deleteCategory = async (req, res) => {
  const category = await Category.findByIdAndDelete(req.params.id);
  if (!category) return res.status(404).json({ message: 'Not found' });
  res.json({ message: 'Category deleted' });
};
