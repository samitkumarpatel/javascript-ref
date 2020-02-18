var express = require("express");
var app = express();
const fs = require('fs');

app.listen(4002, () => {
    console.log("%s running port number", 4002);
});

app.post("/DemoMock", (req, res) => {
    console.log(req.method);
    fs.readFile(__dirname + '/mockfiles/abc.xml', (err, data) => {
        if (err) throw err;
        res.format({
            'text/xml': function () {
                res.write(data);
                res.send();
            }
        });

    });
});

app.get('/test', (req, res) => {
    res.format({
        'text/plain': function () {
            res.send('hey');
        },

        'text/html': function () {
            res.send('<p>hey</p>');
        },

        'application/json': function () {
            res.send({ message: 'hey' });
        },

        'default': function () {
            // log the request and respond with 406
            res.status(406).send('Not Acceptable');
        }
    });
})