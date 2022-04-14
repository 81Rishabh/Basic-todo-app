const TodoListModel = require('../models/TodList');


module.exports = function(req,res){
    // destructuring
    const {title , category , date} = req.body;
    TodoListModel.create({
        title : title,
        category : category,
        date : date
    },function(err){
        if(err) {
          console.log("Error in creating List");
          return;
        }
        return res.redirect('back');
    });
}

