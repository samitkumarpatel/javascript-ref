## command ##
* npm init - will create a package.json file with necessary dependencies. 
* npm install <<packageName>> --save - save the depn in package.json file as well as make that available for the current applicaiton
* node <<fileName>>.js - run the node application
* npm install -g nodemon - install nodemon globally.

* nock - for api level mocking
```sh     
	 const invalidAuthenticationTokenInfo = nock("http://url.to.mock")
    	.get("/api/tokeninfo?access_token=invalid").times("999999999")
    	.reply(401, "{}");
```


### useful website ##
* java script code coverage library
```
  https://www.npmjs.com/package/nyc
```
* production process manager for nodejs
```
  https://www.npmjs.com/package/pm2
```

### handlebars
```
compile the handlebar template

handlebars *.handlebars -a -f ../js/template.js
```

### javascript packaging

```
var APPLICATIONNAME = APPLICATIONNAME || {};
APPLICATIONNAME.moduleName = APPLICATIONNAME.moduleName || {};
(function(j,h,other,moduleName){
  
  APPLICATIONNAME.moduleName.varName = "Hello";  
  APPLICATIONNAME.moduleName.varArray = {};
  
  APPLICATIONNAME.moduleName.functionName = function(parameter){
      return parameter * 2;
  }
  .............
  .............

}(jQuery,Handlebar,Other,APPLICATIONNAME.moduleName));
```