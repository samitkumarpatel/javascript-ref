var mysql=require("mysql");
var config=require("../config");

exports.getResult=function(sql,callback){
	//gettign the connection object
	var connection = mysql.createConnection(config.param);

	//connect the db 
	connection.connect();

	//querying the db 
	connection.query('SELECT * FROM test', function(err, recordset) {
  		if (err){
  			callback(null,err);
  			throw err;	
  		}else{
  			callback(recordset);
  		} 
  		
  		console.log('The recordset result is: ', recordset); 		
  		//console.log('The formated result is: ', JSON.stringify(recordset));  			
	});

	//close the connection
	connection.end();
};


