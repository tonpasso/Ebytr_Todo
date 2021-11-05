const express = require('express');
const cors = require('cors');

const todoRouter = require('./routes/todoRoutes');

const app = express();
app.use(express.json());
app.use(cors());

// routes
app.use('/todos', todoRouter);

module.exports = app;