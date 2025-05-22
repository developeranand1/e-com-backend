const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  products: [
    {
      product: { type: mongoose.Schema.Types.ObjectId, ref: 'Product' },
      qty: Number
    }
  ],
  totalPrice: Number,
  isPaid: { type: Boolean, default: false },
  paidAt: Date
});

module.exports = mongoose.model('Order', orderSchema);
