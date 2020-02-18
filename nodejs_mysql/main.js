var http=require("http");
var db=require("./config/db");
var config=require("./config");

http.createServer(function(req,res){
	
	console.log("The db params are :"+config.param.host+" "+config.param.port);
	
	//will enhance the product here 

	db.getResult("",function(data,err){
		if(err){
			res.statusCode = 500;
			res.setHeader("Content-Type", "text/html");
			res.write("<h1>error occured!!</h1>");			
		}else{
			res.statusCode = 200;
			res.setHeader("Content-Type", "application/json");
			res.write(JSON.stringify(data));
		}			
		res.end();
	});

}).listen(3001,function(){
	console.log("server started with port number 3001");
});