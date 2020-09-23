var express = require('express');
var bodyParser = require('body-parser');
var app = express();
app.use(express.static('static'))
var moment = require('moment');
app.use(bodyParser.json());
var today = moment(new Date()).format('YYYY-MM-DD');
var User = require('./models/user.js');
var mongoose = require('mongoose');
var bcrypt = require('bcrypt-nodejs');
var jwt = require('jwt-simple');
var userController = require('./controller/userController');

app.get('/logout', userController.getLogout);

app.post('/register', userController.setRegister);
  
app.post('/login', userController.setLogin);

app.post('/resetpassword', userController.setResetPassword);

mongoose.connect('mongodb://localhost:27017/eltendedero',(err)=>{
    if(!err){
        console.log('Connected to mongo Database');
    }
})

app.listen(8082);