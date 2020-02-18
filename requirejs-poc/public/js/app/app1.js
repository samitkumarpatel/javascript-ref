require(['jquery','handlebars','template'], function($,h,template) {
    $(document).ready(function(){  
        $.ajax({
            type: "GET",
            url: "/emps",
            success: function(data){
                var empTemplate = template.emps ;
                var result = empTemplate(data);
                $('#emps').html(result);
            },
            error : function(jqXHR, textStatus,errorThrow){
                $('#emps').html("<div class='alert alert-warning'>"+jqXHR+","+textStatus+","+errorThrow+"</div>");
            }
        });
    });
});