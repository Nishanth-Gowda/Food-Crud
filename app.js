const express = require('express');
const bodyParser = require('body-parser');
const orderRoutes = require('./routes/orderRoutes');

const app = express();

app.use(bodyParser.json());

// Routes
app.use(orderRoutes);

module.exports = app;
