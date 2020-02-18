var page = require('webpage').create();

page.open('http://localhost:3000', function () {
    var title = page.evaluate(function () {
        var posts = document.getElementsByClassName("container");
        posts[0].style.backgroundColor = "#FFFF00";
        return document.title;
    });
    page.clipRect = { top: 0, left: 0, width: 600, height: 700 };
    if(title === null || title === undefined){
        title = "demo";
    }
    page.render(title + ".png");
    phantom.exit();
});