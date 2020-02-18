var Module = Module || {};
Module.module1 = Module.module1 || {};
(function($,handlebars,module1){

    module1.title=function(data){
        var context={
            "title" : data
        }
        $('title').html(handlebars.templates.title(context));
    }
    module1.title("index");

    module1.applicationError = function(jqXHR, textStatus, errorThrown){
        var context={
            "status":jqXHR.status,
            "error":textStatus + " ,"+errorThrown
        };
        $('#application-error').html(handlebars.templates.error(context));
    }

    //header
    $.ajax({
        url : '/menu',
        success : function(data){
            var menu = handlebars.templates.menu;
            $('#header').html(menu(data));
        },
        error : function(jqXHR, textStatus, errorThrown){
            module1.applicationError(jqXHR, textStatus, errorThrown);
            module1.title(jqXHR.status);
        }
    });

    //footer
    $.ajax({
        url : '/footer',
        success : function(data){
            var footer = handlebars.templates.footer;
            $('#footer').html(footer(data));
        },
        error : function(jqXHR, textStatus, errorThrown){
            module1.applicationError(jqXHR, textStatus, errorThrown);
            module1.title(jqXHR.status);
        }
    });

    module1.student = function(){
        var stud = handlebars.templates.create;
        module1.title("student")
        $('#application-body').html(stud());
    }

    module1.student();

    $('#ok').on('click',function(){
       var name = $("#name").value();
       var desig = $("#designation").value();
        $.ajax({
            url :'/submit',
            data : '{"name" :name,"designation" :desig}',
            dataType :'application/json',
            type : 'POST',
            success : function(data){

            },error : function(jqXHR, textStatus, errorThrown){
                module1.applicationError(jqXHR, textStatus, errorThrown);
                module1.title(jqXHR.status);
            }
        })
    });


    $('#reset').on('click',function(){
    });

}(jQuery,Handlebars,Module.module1));