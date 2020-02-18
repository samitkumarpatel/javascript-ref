module.exports = function(config) {
  config.set({
    basePath: '',
    frameworks: ['jasmine', 'requirejs'],
    files: [
      'test-main.js',
      {pattern: 'public/js/**/*.js', included: false},
      {pattern: 'test/**/*.js', included: false},
      {pattern: 'bower_components/**/*.js', included: false}
    ],
    exclude: [
    ],
    preprocessors: {
    },
    reporters: ['progress'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ['Chrome','PhantomJS'],
    singleRun: true,
    concurrency: Infinity
  })
}
