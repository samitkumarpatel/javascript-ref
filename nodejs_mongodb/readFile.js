var fs=require("fs");
exports.readFile=function(path,callback){
	
	if(path===undefined){
		callback("file path no provided");
	}else{
		fs.readFile(path,function(err,data){
			callback(err,data);
		});
	}

}
