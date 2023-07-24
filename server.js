// server.js
const mongoose = require('mongoose');
const app = require('./app');

const port = 3000;
const dbUrl = 'mongodb://127.0.0.1:27017/order_db';

mongoose
  .connect(dbUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log('Connected to MongoDB!');
    app.listen(port, () => {
      console.log(`Server is running on http://localhost:${port}`);
    });
  })
  .catch((err) => console.error('Error connecting to MongoDB:', err));
