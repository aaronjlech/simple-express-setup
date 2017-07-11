const path = require('path');
const express = require('express');
const app = express();
const mongoose = require('mongoose');
// const router = require('./controllers/index');
const bodyParser = require("body-parser");
mongoose.Promise = require('bluebird');

// insert mongo db to use
// mongoose.connect('mongodb://localhost:27017/todo-mvc');


app.use(bodyParser.json());
app.use(express.static(__dirname + '/public'));

app.get('/', function (req, res) {
    res.sendFile(__dirname + "/public/index.html");
}


const port = 3000
application.listen(port, function(){
   //should see these console loggin in the terminal
   console.log("server is running!");
   console.log('listening at port: ', port);
})
