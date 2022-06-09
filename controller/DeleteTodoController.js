const TodoListModel = require('../models/TodList');
module.exports.deleteTodo = function(req,res){
    // fething id from query parameter
    var id = req.query.id;
    TodoListModel.findByIdAndDelete(id , function(err , data){
        if(err) { 
            console.log("error in deleting tasks");
            return;
        }
        return res.redirect("back");
    }); 
}
