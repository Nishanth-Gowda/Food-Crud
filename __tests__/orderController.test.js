// tests/orderController.test.js
const mongoose = require('mongoose');
const request = require('supertest');
const app = require('../app');
const Order = require('../models/orderModel');

beforeEach(async () => {
  await mongoose.connect('mongodb://127.0.0.1:27017/test_db', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  await Order.deleteMany({});
});

afterEach(async () => {
  await mongoose.connection.db.dropDatabase();
  await mongoose.connection.close();
});

describe('Order API', () => {
  it('should create a new order', async () => {
    const response = await request(app)
      .post('/orders')
      .send({
        order_id: '12345',
        foodname: 'Pizza',
        order_qty: 2,
        ordered_by: 'John Doe',
      });
    expect(response.statusCode).toBe(201);
    expect(response.body.order_id).toBe('12345');
  });

  it('should fetch all orders', async () => {
    const order1 = new Order({
      order_id: '123',
      foodname: 'Burger',
      order_qty: 1,
      ordered_by: 'Jane Doe',
    });
    await order1.save();

    const order2 = new Order({
      order_id: '456',
      foodname: 'Fries',
      order_qty: 3,
      ordered_by: 'Bob Smith',
    });
    await order2.save();

    const response = await request(app).get('/orders');
    expect(response.statusCode).toBe(200);
    expect(response.body).toHaveLength(2);
  });

  it('should get an order by ID', async () => {
    // Create an order to delete
    const order = new Order({
      order_id: '123',
      foodname: 'Burger',
      order_qty: 1,
      ordered_by: 'John Doe',
    });
    await order.save();

     // Perform the get  request
    const response = await request(app).get(`/orders/${order._id}`);

    // Assertions
    expect(response.statusCode).toBe(200);
    expect(response.body._id).toBe(String(order._id));

    // Check if the order was found in the database
    const getOrder = await Order.findById(order._id);
    expect(getOrder).not.toBeNull();
  
  });

  it('should delete an order by ID', async () => {
    // Create an order to delete
    const order = new Order({
      order_id: '123',
      foodname: 'Burger',
      order_qty: 1,
      ordered_by: 'John Doe',
    });
    await order.save();

    // Perform the delete request
    const response = await request(app).delete(`/orders/${order._id}`);

    // Assertions
    expect(response.statusCode).toBe(200);
    expect(response.body._id).toBe(String(order._id));

    // Check if the order was deleted from the database
    const deletedOrder = await Order.findById(order._id);
    expect(deletedOrder).toBeNull();
  });
});
