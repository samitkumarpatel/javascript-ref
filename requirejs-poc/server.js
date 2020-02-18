const express = require('express');
const app = express();
app.use('/static', express.static('bower_components'));
app.use('/static', express.static('public'));

app.listen(4010, function () {
  console.log('%s app listening on port',4010);
});

app.get('/home', function (req, res) {
  res.sendFile(__dirname+'/index.html');
});

app.get("/emps",(req, res)=>{
    res.sendfile(__dirname+"/mock_data/emps.json");
});
