const mongoose = require('mongoose');

const todoSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'A task must have a name'],
    trim: true,
  },
  complete: {
    type: Boolean,
    default: false,
  },
  timestamp: {
    type: String,
    default: Date.now()
  }
})

const Todo = mongoose.model('Todo', todoSchema);

module.exports = Todo;