var express=require('express');
app=express();
app.get('/',function(req,res){
  res.status(200).json({"name":"samit","designation":"sr software engg","salary":200});
});
app.listen(3001,function(){ 
   console.log('node server is running on 3001 port');	
});
