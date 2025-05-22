const Order = require('../models/Order');

exports.createOrder = async (req, res) => {
  const order = await Order.create({ ...req.body, user: req.user._id });
  res.status(201).json(order);
};

exports.getMyOrders = async (req, res) => {
  const orders = await Order.find({ user: req.user._id }).populate('products.product');
  res.json(orders);
};
