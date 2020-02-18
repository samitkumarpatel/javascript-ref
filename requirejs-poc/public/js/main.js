requirejs.config({
    baseUrl: '/static/js/app',
    paths: {
        'jquery': '/static/jquery/dist/jquery.min',
        'handlebars' : '/static/handlebars/handlebars.min',
        'handlebars.runtime' : '/static/handlebars/handlebars.runtime.min',
        'template' : '/static/js/template'
    }
    /*,
    shim: {
        "handlebars": {
            deps: ["handlebars", "handlebars.runtime"],
            exports: "handlebars"
        }
    }*/
});

requirejs(['jquery','app1','handlebars','template'],function($,app1,h,template) {
    $(document).ready(function(){
        console.log('main dot js loaded');
    });
});