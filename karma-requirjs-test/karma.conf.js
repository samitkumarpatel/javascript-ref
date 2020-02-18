module.exports = function ( config ) {
    config.set( {
        basePath: './',
        frameworks: [ 'jasmine', 'requirejs' ],
        files: [
            'tests/test.main.js', // this is a main file which is booting up our test
            { pattern: 'tests/**/*.js', included: false }, // this is where are your specs, please do not include them!
            { pattern: 'src/**/*.js', included: false } // this is where are your source files, please do not include them!
        ],
        exclude: [],
        reporters: [ 'progress' ],
        colors: true,
        logLevel: config.LOG_INFO
    } )
};