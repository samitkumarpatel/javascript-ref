var http=require("http");
var readFile=require("./readFile");

http.createServer(function(req,res){
	console.log("value of __dirname will be "+ __dirname);
	readFile.readFile(__dirname + "/" +"dbconfig.json",function(err,data){
		if(err) console.log("error occured");
		res.end(data);
	})
}).listen(3001,function(){
	console.log("The server is running in port 3001");
})
