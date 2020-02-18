var express = require('express');
var app = express();
var path = require('path');
var mongojs = require('mongojs')
var bodyParser = require('body-parser');

//remote mongo server
var remotedb = mongojs('mongodb://188.166.32.57:27017/test',['test','emp']);
var db = mongojs('mongodb://172.16.222.130:27017/test',['test1']);

//static path
app.use(express.static(path.join(__dirname, '/')));
app.use(bodyParser());

//server listening port
app.listen('3000',function(){
    console.log('Welcome to the express!! $amps application is listening on port 3000 !!');
});

app.get('/menu',function(req,res){
    var data = require('./mock/menu.json');
    res.send(data);
});

app.get('/footer',function(req,res){
    var data = require('./mock/footer.json');
    res.send(data);
});

app.get('/', function (req, res) {
    res.sendFile(__dirname + '/index.html');
});

app.get('/emps',function(req,res){
    remotedb.emp.find(function(err,data){
       res.json(data);
   });
});

//remote db intraction
app.get('/test',function(req,res){
    remotedb.test.find(function(err,data){
        res.json(data);
    });
});

app.post('/submit',function(req,res){
    console.log(req.body);
});

//localdb with ip intraction
app.get('/local',function(req,res){
   db.test1.find(function(err,data){
       res.json(data);
   })
});

app.get('/html', function(req, res){

    var html = '<form action="/html/post" method="post">' +
        'Enter your name:' +
        '<input type="text" name="userName" placeholder="..." />' +
        '<br>' +
        '<button type="submit">Submit</button>' +
        '</form>';

    res.send(html);
});

app.post('/html/post', function(req, res){
    var userName = req.body.userName;
    var html = 'Hello: ' + userName + '.<br>' +
        '<a href="/">Try again.</a>';
    res.send(html);
});

app.post('/student/post', function(req, res){
    console.log(req.body);
    res.json(req.body);
});