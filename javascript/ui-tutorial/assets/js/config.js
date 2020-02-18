requirejs.config({
    baseUrl : 'assets/js',
    paths: {
        'jquery':				'vendor/jquery/dist/jquery.min',
        'jquery-ui':			'vendor/jquery-ui/jquery-ui.min',
        'typeahead':			'vendor/typeahead.js/dist/typeahead.bundle.min',
        'pretify':				'vendor/pretify',
        'handlebars':			'vendor/handlebars/handlebars.runtime.min',
        'underscore': 			'vendor/underscore/underscore-min',
        'backbone':				'vendor/backbone/backbone-min',
        'handlebars.runtime':	'vendor/handlebars/handlebars.runtime.amd.min',
        'template'          :   'template',
        "masonry": 				'vendor/masonry/dist/masonry.pkgd.min'
    },
    shim: {
        "underscore": {
            exports: '_'
        },
        "backbone": {
            deps: [
                'underscore',
                'jquery'
            ],
            exports: 'Backbone'
        }
    }
});
