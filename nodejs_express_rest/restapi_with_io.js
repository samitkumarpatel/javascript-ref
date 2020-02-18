var express = require("express");
var process = require("process");
app = express();
var reader=require("./readerProcess");

process.on('uncaughtException', function (err) {
  console.error(err);
  console.log("Node NOT Exiting...");
});

app.get('/error',function (req, res) {   
   var filePath = __dirname + "/" + "users.json"   ;
   reader.reafFile(filePath,function(err,data){
      
      if(err){ 
        res.status(500).end("error occured with error :-"+err);
      };

      res.setHeader("Content-Type", "application/json");
      res.setHeader("api-version", "0.0.1");
      res.status(200).end(data);
   });
});

app.get('/success',function (req, res) {   
   var filePath = __dirname + "/" + "user.json"   ;
   reader.reafFile(filePath,function(err,data){
      
      if(err){ 
        res.status(500).end("error occured with error :-"+err);
      };

      res.setHeader("Content-Type", "application/json");
      res.setHeader("api-version", "0.0.1");
      res.status(200).end(data);
   });
});


app.listen(3000, function () {
  console.log("listning on port 3000");
})