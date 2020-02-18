// RequireJS deps
var deps = [];

// Get a list of all the test files to include
Object.keys( window.__karma__.files ).forEach( function ( file ) {
    if ( /(spec|test)\.js$/i.test( file ) ) {
        deps.push( file );
    }
} );

require.config( {
    // Karma serves files under /base, which is the basePath from your config file
    baseUrl: '/base/src',

    // dynamically load all test files
    deps: deps,

    // we have to kickoff jasmine, as it is asynchronous
    callback: window.__karma__.start
} );