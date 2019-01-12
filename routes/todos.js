const express = require('express');
const router = express.Router();
const db = require("../models");
const helpers = require("../helpers/todos");

router.route('/')
  .get(helpers.getTodos)
  .post(helpers.createTodo)

router.route('/:todoId')
  .get(helpers.getTodo)
  .put(helpers.updateTodo)
  .delete(helpers.deleteTodo)

module.exports = router;

/*
            THE ROUTES
  VERB        ROUTES            DESCRIPTION          
  GET       /api/todos          List all todos
  POST      /api/todos         Create new todos
  GET      /api/todo/:todoid   Retrieve a todo
  PUT     /api/todo/:todoId    Update a todo
  DELETE  /api/todo/:todoId    Delete a todo
*/