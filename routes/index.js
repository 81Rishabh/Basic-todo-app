const express = require('express');
const router = express.Router();
const HomeController = require('../controller/HomeController');
const TodoController = require('../controller/TodoController');
const TodoListModel = require('../models/TodList');


// home route
router.get('/' , HomeController.home);
router.post('/Add-Todo' , TodoController);

router.get('/delete-taks/:id' , function(req,res){
    TodoListModel.findByIdAndDelete(req.params.id , function(err , data){
        if(err) { 
            console.log("error in deleting tasks");
            return;
        }
        console.log(data);
        return res.redirect("back");
    }) ; 
});

module.exports  = router;