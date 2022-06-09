const express = require('express');
const app = express();
const path = require('path');
const dotenv = require('dotenv');
dotenv.config({ path: path.resolve(__dirname, './config/.env') });
const port  = process.env.port || 3000;
const bodyParser = require('body-parser');


// app.use(bodyParse.json());
app.use(bodyParser.urlencoded({extended : false}));

// use express router
app.use('/' , require('./routes/index'));

// view engine
app.set('view engine', 'ejs');
app.set('views' , path.join(__dirname, 'views'));


// use static path
app.use(express.static('public'));

// db config
const db = require('./config/db');

app.listen(port , function(err){
    if(err) {
        console.log(`Error is : ${err}`);
        return;
    }
    console.log("Server is running on the port " + port);
});

