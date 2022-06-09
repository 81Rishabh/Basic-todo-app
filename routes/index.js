const express = require('express');
const router = express.Router();
const HomeController = require('../controller/HomeController');
const AddTodoController = require('../controller/AddTodoController'); 
const DeleteTodoController = require('../controller/DeleteTodoController'); 



// home route
router.get('/' , HomeController.home);
router.post('/Add-Todo' , AddTodoController.addTodo);
router.get('/delete-taks' , DeleteTodoController.deleteTodo);

module.exports  = router;