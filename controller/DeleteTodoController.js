const TodoListModel = require('../models/TodList');
module.exports.deleteTodo = function(req,res){
    TodoListModel.findByIdAndDelete(req.params.id , function(err , data){
        if(err) { 
            console.log("error in deleting tasks");
            return;
        }
        return res.redirect("back");
    }); 
}
