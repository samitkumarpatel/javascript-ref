var APPLICATION1 = APPLICATION1 || {};
APPLICATION1.application1 = APPLICATION1.application1 || {};

(function($,backbone,application1){
  
    application1.Person = backbone.Model.extend({
     defaults :{
         id : 1001,
         name : 'Spider Man',
         age : 30,
         type : 'Normal'
     } 
  });
  
  application1.Page1 = backbone.View.extend({
      template : _.template("<strong><%= id%>,<%= name%>,<%= age%>,<%= type%> </strong>"),
      //template : _.template($('#result_template_page').html(), {}),
      initialize : function(){
          this.render();
      },
      render : function(){
         this.$el.html(this.template(this.model.toJSON())); 
      }
  })  
  
  $('#next-btn').on('click',showResult);
  $('#prev-btn').on('click',displayBackData);
  //$('#application-area').html($('#initialpage').html());
  
    function showResult(){
        var person = new application1.Person();
        person.set('id',$('#id').val());
        person.set('name',$('#name').val());
        person.set('age',$('#age').val());
        person.set('type',$('#type').val());

        var page1 = new application1.Page1({model : person});
        $('#application-area').html(page1.el);    
  }
  
  function displayBackData(){
    $('#application-area').html("<h1>Ohhhh...</h1>");  
  }
  
 
 
  //Link-2
  
    //views
    application1.FirstTab = backbone.View.extend({
        el : $("#application-area-link2"),
        intitialize : function(){
            this.render();
        },
        render : function(){
           //var template = _.template($("#tab-1").html(),{});
           this.$el.html(_.template($("#tab-1").html(),{}));
        }
    });
    
    application1.SecondTab = backbone.View.extend({
         el : $("#application-area-link2"),
         intitialize : function(){
             this.render();
         },
         render : function(){
            var template = _.template($("#tab-2").html(),{});
            this.$el.html(template);
         }
     });
     //router
     application1.Link2Router = backbone.Router.extend({
         routes : {
             "" : "link2initialPage",
             "tab1" : "link2Tab1Page",
             "tab2" : "link2Tab2Page"
         },
         link2initialPage : function(){
            application1.initialRoute = new application1.FirstTab();
            console.log(application1.initialRoute);
         },
         link2Tab1Page : function(){
            application1.firstRoute = new application1.FirstTab(); 
            console.log(application1.firstRoute);
         },
         link2Tab2Page : function(){
            application1.secondRoute = new application1.SecondTab();
            console.log(application1.secondRoute);
         }
     });
     
     new application1.Link2Router();
     backbone.history.start();
  
}(jQuery,Backbone,APPLICATION1.application1));