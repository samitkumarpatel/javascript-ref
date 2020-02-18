var TEST = TEST || {};
TEST.test = TEST.test || {};

(function($,b,h,test){

    test.TestModel = b.Model.extend({
        initialize : function(){
        },
        defaults : {
           'name':'TestModel',
           'version':'0.0.1-SNAPSHOT',
            'id':'001'
        }
    });
    test.ErrorModel = b.Model.extend({

    });

    test.MenuModel = b.Model.extend({
        initialize : function(){
        },
        defaults : {
            'menuId':'testId',
            'menu':'menu_1'
        }
    });

    test.Menus = b.Collection.extend({
        modal : test.MenuModel
    });


    test.Students = b.Collection.extend({
        url : 'http://127.0.0.1:8088/soapmock/students'
    });

    test.Users = b.Collection.extend({
        url : '/users'
    });

    test.MenuView = b.View.extend({
        el : $("#app-sidebar"),
        template : h.templates.menu,
        initialize : function(){
            var menus=new test.Menus();

            menus.add(new test.MenuModel({"menuId":"test","menu":"TEST"}));
            menus.add(new test.MenuModel({"menuId":"student","menu":"STUDENTS"}));
            menus.add(new test.MenuModel({"menuId":"user","menu":"USERS"}));

            this.render(menus);
        },
        render : function(x){
            this.$el.html(this.template({menus : x.toJSON()}));
        }
    });

    test.TestView = b.View.extend({
        el : $("#app-2nd-area"),
        template : h.templates.test,
        initialize : function(){
            this.render();
        },
        render : function(){
            this.$el.html(this.template({name : "Samit K"}));
        }
    });

    test.StudentsView = b.View.extend({
        el : $("#app-2nd-area"),
        template: h.templates.students,
        initialize : function(){
            this.render();
        },
        render : function(){
            this.$el.html(this.template({students : this.collection.toJSON()}));
        }
    });

    test.UsersView = b.View.extend({
        el : $("#app-2nd-area"),
        template: h.templates.users,
        initialize : function(){
            this.render();
        },
        render : function(){
            this.$el.html(this.template({users : this.collection.toJSON()}));
        }
    });

    test.ErrorView = b.View.extend({
        el : $("#app-2nd-area"),
        template : h.templates.exception,
        initialize:function(){
            this.render();
        },render : function(){
            this.$el.html(this.template(this.model));
        }
    });

    test.Workspace = b.Router.extend({
        routes: {
            ""      :   "initRoute",
            "test"  :   "test",
            "student":  "student",
            "user":     "user"
        },
        initRoute: function() {
           new test.MenuView();
        },
        test: function() {
           new test.TestView();
        },
        student: function() {
            var y = new test.Students();
            y.fetch({
               success : function(data){
                   new test.StudentsView({collection:data});
               },error : function(collection, response, options){
                    new test.ErrorView({model : {"e":JSON.stringify(response)}});
                }
            });
        },
        user: function() {
            var x = new test.Users();
            x.fetch({
                success : function(data){
                    new test.UsersView({collection : data});
                },error : function(err){
                    new test.ErrorView();
                }
            });
        }
    });
    new test.MenuView();
    new test.Workspace();
    b.history.start();

}(jQuery,Backbone,Handlebars,TEST.test));