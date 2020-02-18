var http = require('http');

http.createServer(function(req,res){
	console.log("rest request with http")
	switch(req.method){		
		case 'GET':														
		break;

		case 'POST':			
		break;

		case 'PUT':
		break;

		case 'DELETE':
		break;

		default:
		res.end("http method not found");
	}

}).listen(3001,function(){
	console.log('started server with port '+3001);
});

