var express = require('express')
var bodyParser = require('body-parser');
var path = require('path');
var async = require('async');
var app = express()
app.use('/static', express.static('public'))
app.use(bodyParser.json());
var service = require('./service/userservice');
var logic = require('./logic/userlogic')();
//swagger integration
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json'); 
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));



//middleware filter
app.use(function(req,res,next) {
  console.info("middle ware gateway ");
  next();
});

app.listen(3000, function () {
  console.log('port : 3000') 
});


app.get('/ui', function (req, res) {
  res.sendFile(__dirname+"/index.html");
});

app.get('/test',function(req,res){
    res.send(service.getName());
});

app.get('/users', function (req, res) {
     
     //impl#1
     logic.getUsers(function(err,result){
        res.send(result);
     });

     /*
     //impl#2
     userService.getUsers(function(err,results){
        if(!err){
          res.send(results);
        }else{
          res.send(err);
        }
     });
     */
});


app.get('/user/:id', function (req, res) {  
    service.getUser(req.params.id,function(err,result){
      if(!err){
          res.send(result);
      }else{
          res.statusCode(500);
          res.send(err);
      }
    });    
});

app.get('/request',(req,res)=>{
  res.send(req.route);
});

//error handler
app.use(function (err, req, res, next) {
  var error = {
    "code" : "e001",
    "type" : "server side",
    "cause" : "server side error",
    "details" : err.stack
  };
  res.status(500).send(error);
});





