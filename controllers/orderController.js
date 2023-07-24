const mongoose = require('mongoose');
const Order = require('../models/orderModel');

exports.createOrder = async (req, res) => {
  try {
    const order = new Order(req.body);
    await order.save();
    res.status(201).json(order);
  } catch (err) {
    res.status(500).json({ error: 'Could not create the order.' });
  }
};

exports.getAllOrders = async (req, res) => {
  try {
    const orders = await Order.find();
    res.json(orders);
  } catch (err) {
    res.status(500).json({ error: 'Could not fetch orders.' });
  }
};

exports.getOrderById = async (req, res) => {
    try{
        const order = await Order.findById(req.params.id);
        res.json(order);

    }
    catch(err){
        res.status(500).json({error: 'Could not fetch the order.'});
    }
}

exports.deleteOrderById = async (req, res) => {
    try {
      const orderId = req.params.id;
  
      if (!mongoose.Types.ObjectId.isValid(orderId)) {
        return res.status(400).json({ error: 'Invalid order ID' });
      }
  
      const deletedOrder = await Order.findByIdAndDelete(orderId);
  
      if (!deletedOrder) {
        return res.status(404).json({ error: 'Order not found' });
      }
  
      res.json(deletedOrder);
    } catch (err) {
      console.error('Error deleting order:', err); // Log the error for debugging purposes
      res.status(500).json({ error: 'Could not delete the order.' });
    }
  };