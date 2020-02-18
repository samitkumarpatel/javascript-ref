define([
    'jquery',
    'backbone',
    'handlebars.runtime',
    'handlebars'
], function ($, Backbone, Handlebar,H) {
    var app = {};

    var context ={
        primary : false,
        id : 'test' ,
        value : 'click me'
    }
    $('#col-1').html(Handlebar.templates.button(context));

    app.myColl = Backbone.Collection.extend({
        urlRoot : '/test',
        url : function(){
            return this.urlRoot;
        }
    });

    app.InitialView = Backbone.View.extend({
        el : $('#col-2'),
        template : Handlebar.templates.table,
        initialize : function () {
            this.render()
        },
        render : function () {
            this.$el.html(this.template(this.collection));
        }
    })

    app.ApplicationRouter = Backbone.Router.extend({
        routes: {
            "":                 "help",    // #help
            "search/:query":        "search",  // #search/kiwis
            "search/:query/p:page": "search"   // #search/kiwis/p7
        },
        help: function() {

            var MyModel = new app.myColl();
            MyModel.fetch({
               success : function (data) {
                   new app.InitialView({collection : data.toJSON()});
               } ,error : function (err) {
                    console.error(err);
                }
            });

        },
        search: function(query, page) {
            alert(query, page);
        }
    });

    new app.ApplicationRouter();

    Backbone.history.start({
        pushState : false
    });

    $('#test').on('click',function(e){
        $.ajax({
            url : '/assets/template/button.handlebars',
            success : function(data){
                var compileData = H.compile(data);
                $('#col-3').html(data());
            }
        })
    });

    return app;
});