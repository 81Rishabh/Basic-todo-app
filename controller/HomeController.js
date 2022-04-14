const TodoListModel = require('../models/TodList');

module.exports.home = function(req,res){
  TodoListModel.find({} , function(err,lists){
      if(err) {
        console.log("Error in fething content form db...!");
        return;
      }
      return res.render("Home" , {
         title  : "Todo App",
         TodoLists  : lists
      });
  });
   
}

