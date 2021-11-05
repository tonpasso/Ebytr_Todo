const Todo = require('../models/todoModel');
const catchAsync = require('../utils/catchAsync');

const getTodoList = catchAsync(async (req, res, next) => {
  const todoList = await Todo.find();

  res.status(200).json(todoList);
});

const createTodo = catchAsync(async (req, res, next) => {
  const { name } = req.body;
  const newTodo = await Todo.create({ name });

  res.status(200).json({
    status: 'Success',
    data: {
      todo: newTodo,
    },
  });
});

const updateTodo = catchAsync(async (req, res, next) => { 
  const { name } = req.body;
  console.log(req.params.id, name)
  const todoUpdate = await Todo.findByIdAndUpdate(req.params.id,{name}, {
    new: true,
  });

  console.log(todoUpdate)

  res.status(200).json({
    status: 'Success',
    todo: todoUpdate,
  });  
});

const deleteTodo = catchAsync(async (req, res, next) => {
  const result = await Todo.findByIdAndDelete(req.params.id);
  // console.log(result)

  res.status(204).json(result);  
});

const completeTodo = catchAsync(async (req, res, next) => {
  const task = await Todo.findById(req.params.id);
  
  task.complete = !task.complete;
  task.save();

  res.status(200).json(task);
});

module.exports = {
  getTodoList,
  createTodo,
  deleteTodo,
  completeTodo,
  updateTodo,
}