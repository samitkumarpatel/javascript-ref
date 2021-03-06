var cluster = require('cluster');
var PORT = +process.env.PORT || 1337;
var reader=require("./readerProcess");

if(cluster.isMaster){
   cluster.fork();
   cluster.fork();

   cluster.on('disconnect', function(worker) 
   {
       console.error('disconnect!');
       cluster.fork();
   });
} else {
    var domain = require('domain');
    var server = require('http').createServer(function(req, res) 
    {
        var d = domain.create();
        d.on('error', function(er) 
        {
            //something unexpected occurred
            console.error('error', er.stack);
            try 
            {
               //make sure we close down within 30 seconds
               var killtimer = setTimeout(function() 
               {
                   process.exit(1);
               }, 30000);
               // But don't keep the process open just for that!
               killtimer.unref();
               //stop taking new requests.
               server.close();
               //Let the master know we're dead.  This will trigger a
               //'disconnect' in the cluster master, and then it will fork
               //a new worker.
               cluster.worker.disconnect();

               //send an error to the request that triggered the problem
               res.statusCode = 500;
               res.setHeader('content-type', 'text/plain');
               res.end('Oops, there was a problem!\n');
           } 
           catch (er2) 
           {
              //oh well, not much we can do at this point.
              console.error('Error sending 500!', er2.stack);
           }
       });
    //Because req and res were created before this domain existed,
    //we need to explicitly add them.
    d.add(req);
    d.add(res);
    //Now run the handler function in the domain.
    d.run(function() 
    {
        var filePath = __dirname + "/" + "users.json"   ;
        reader.reafFile(filePath,function(err,data){
        if(err){ 
          res.end("error occured with error :-"+err);
        };

        res.setHeader("Content-Type", "application/json");
        res.setHeader("api-version", "0.0.1");
        //response.statusCode = 200;
        res.end(data);
   });

      
      
    });
  });
  server.listen(PORT,function(){
    console.log("running server with port "+PORT);
  });
} 