var allTestFiles = []
var TEST_REGEXP = /(spec|test)\.js$/i

Object.keys(window.__karma__.files).forEach(function (file) {
  if (TEST_REGEXP.test(file)) {
    var normalizedTestModule = file.replace(/^\/base\/|\.js$/g, '')
    allTestFiles.push(normalizedTestModule)
  }
})

require.config({
  baseUrl: '/base',
  paths: {
    'app2': 'public/js/app/app2',
    'app1': 'public/js/app/app1',
    'jquery': 'bower_components/jquery/dist/jquery.min',
    'handlebars': 'bower_components/handlebars/handlebars.min',
    'handlebars.runtime': 'bower_components/handlebars/handlebars.runtime.min',
    'template': 'public/js/template'
  },
  deps: allTestFiles,
  callback: window.__karma__.start
})
