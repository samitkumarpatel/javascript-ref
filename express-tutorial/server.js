var express = require('express');
var app = express();
app.get('/', function(req, res){
  res.send('hello world');
});

app.get('/html', function(req, res){
  res.sendFile(__dirname+"/index.html");
});

app.listen(3000,function(){
    console.log("started!..");
});