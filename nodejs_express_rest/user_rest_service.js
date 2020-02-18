var express=require('express');
app=express();
var users=[];
app.get('/user/:id',function(request,response){
	console.log('request for /user/'+id);
});
app.get('/users',function(req,res){
   	console.log('request for /users to retrive all user');
   	res.status(200).end(users);
});
app.post('/user',function(req,res){
	var body = request.getBody();
   	console.log('request for persist the user with data :'+body);
});
app.delete('/user/:id',function(req,res){
	console.log('request to delete a user with id '+id);
});
app.listen(3001,function(){
	console.log("process statart with port 3001");
});