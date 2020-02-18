var fs=require("fs");
exports.reafFile=function(filePath,callback){
	fs.readFile( filePath,function (err, data) {
       if(err) callback(err,null);
       callback(null,data); 
	});
}