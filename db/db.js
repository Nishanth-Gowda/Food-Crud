const mongoose = require('mongoose');

const connectToDB = () => {
  return new Promise((resolve, reject) => {
    // Replace 'mongodb://localhost/order_db' with your MongoDB connection string
    const connectionString = 'mongodb://127.0.0.1/order_db';

    mongoose.connect(connectionString, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    });

    mongoose.connection.on('connected', () => {
      console.log('Connected to MongoDB');
      resolve();
    });

    mongoose.connection.on('error', (err) => {
      console.error('MongoDB connection error:', err);
      reject(err);
    });
  });
};

module.exports = connectToDB;
