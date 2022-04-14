// require library
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/Todo-list');

// aquire connection (to check if it is connected)
const db = mongoose.connection;

// error
db.on('error', function(){
  console.error("There is an error");
});

// up and running and print the messsage
db.once('open', function() {
  // we're connected!
  console.log("Mongodb connected.....!")
});