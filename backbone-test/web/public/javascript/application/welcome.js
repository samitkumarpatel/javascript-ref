var WELCOME = WELCOME || {};
WELCOME.welcome1 = WELCOME.welcome1 || {};
(function($,welcome1,b){
   
    welcome1.initTmp = function(){
      return  _.templateSettings = { interpolate: /\<\@\=(.+?)\@\>/gim, evaluate: /\<\@(.+?)\@\>/gim, escape: /\<\@\-(.+?)\@\>/gim };
     // return _.templateSettings = { interpolate :  /\{\{\=(.+?)\}\}/g, evaluate: /\{\{(.+?)\}\}/g };
    };
    
    $('#application-menu').load("./welcome/menu.html");
      
    welcome1.IndexPage = b.Router.extend({
       routes : {
           "" : "indexPage",
           "link1" : "link1Page",
           "link2" : "link2Page",
           "link3" : "link3Page",
           "link4" : "link4Page"           
       },
       indexPage:function(){           
           $('#application-header').html("<h2>Default Page</h2>");
           $('#application-area').load("./welcome/default.html");
       },
       link1Page:function(){           
           $('#application-header').html("<h2>Link1 Page</h2>");
           $('#application-area').load("./welcome/link1.html"); 
       },
       link2Page:function(){
          $('#application-header').html("<h2>Link2 Page</h2>");
          $('#application-area').load("./welcome/link2.html"); 
       },
       link3Page:function(){
          $('#application-header').html("<h2>Link3 Page</h2>");
          $('#application-area').html("");
       },
       link4Page:function(){
          $('#application-header').html("<h2>Link4 Page</h2>");
          $('#application-area').html(""); 
       }       
   }); 
   
   welcome1.Message = b.Model.extend({
      defaults:{
          id : '01',
          name : 'Default'
      }
   });
   
   new welcome1.IndexPage();
   b.history.start();
   
   
   
   
}(jQuery,WELCOME.welcome1,Backbone));