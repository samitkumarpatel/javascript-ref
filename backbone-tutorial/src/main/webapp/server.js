var express=require("express");
var fs=require("fs");
var users=[];
app=new express();
var bodyParser = require("body-parser");

(function(){
    fs.readFile( __dirname + "/assert/resources/users.json", 'utf8', function (err, data) {
        users = JSON.parse( data );
        console.log("prepared the users data");
    });
}())

app.use(express.static(__dirname + "/"));
app.use(bodyParser.json());

app.get("/test",function(req,res){
    res.sendFile(__dirname+"/assert/resources/test1.json");
});

app.get("/test",function(req,res){
    res.sendFile(__dirname+"/assert/resources/test1.json");
});

app.get('/user/:id',function(req,res){
    var user = users["user" + req.params.id]
    res.end( JSON.stringify(user));
});

app.get('/users',function(req,res){
    res.status(200).json(users);
});

app.post('/user',function(req,res){
    var body = req.getBody();
    res.end('request for persist the user with data :'+body);
});

app.delete('/user/:id',function(req,res){
    res.end('request to delete a user with id '+req.param.id);
});

app.listen(3001,function(){
    console.log("SERVER STARTED WITH PORT :3001");
})