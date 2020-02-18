var cassandra = require('cassandra-driver');
var config = require('../config/endpoint');
var client = new cassandra.Client({contactPoints: [config.cassendra.ip], keyspace: 'test'});

exports.getName = function() {
    return "samit";
}

exports.getUsers = function(callback){
    client.execute("SELECT * FROM USER", function (err, result) {               
        var listOfUser = [];        
        if (!err) {
            var count = result.rows.length;
            for(var i=0;i<count;i++){
              listOfUser.push(result.rows[i]);
            }     
            callback(null,listOfUser);            
        } else {
            callback(err,null);
        }
    });    
};

exports.getUser= function(id,callback){
   const query = "SELECT * FROM USER WHERE uid= ?";
   client.execute(query,[id],function(err,result) {
       if(err){
           callback(err,null);
       }else{
           if(result.rows.length > 0) {
               callback(null,result.rows[0]); 
           }else {
               var empty = [];
               callback(null,[]);
           }           
       }       
   });
   
};