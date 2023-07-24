const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  order_id: { type: String, required: true, unique: true },
  foodname: { type: String, required: true },
  order_qty: { type: Number, required: true },
  ordered_by: { type: String, required: true },
  ordered_at: { type: Date, default: Date.now },
});

const Order = mongoose.model('Order', orderSchema);

module.exports = Order;
