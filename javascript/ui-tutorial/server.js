var express = require('express');
var exphbs  = require('express-handlebars');
var path = require('path');
var fs = require('fs');
var app = express();

app.use(express.static(path.join(__dirname, '/')));
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

app.get('/', function (req, res) {
    res.render('home',{
        title : 'home',
        admin : true,
        heading : 'main module'
    });
});

app.get('/myapp', function (req, res) {
    res.render('myapp',{
        title : 'myapp',
        admin : true,
        heading : 'form to pdf generator'
    });
});

app.listen(3000,function () {
    console.log('Listen port : 3000');
    console.log('routes : /, /myapp, ');
});

app.get('/test',function (req,res) {
    res.set('content-type','application/json');
    res.sendFile(path.join(__dirname + '/mock/test.json'));

})