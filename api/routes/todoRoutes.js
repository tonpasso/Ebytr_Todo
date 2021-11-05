const express = require('express');
const todoController = require('./../controller/todoController');

const router = express.Router();

router
  .route('/')
  .get(todoController.getTodoList)
  .post(todoController.createTodo);

router
  .route('/update/:id')
  .patch(todoController.updateTodo);

router
  .route('/delete/:id')
  .delete(todoController.deleteTodo);

router
  .route('/complete/:id')
  .get(todoController.completeTodo);

  module.exports = router;
