module.exports = function (grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    clean: 'web/',
    requirejs: {
      compile: {
        options: {
          baseUrl: 'public/js',
          mainConfigFile: 'public/js/main.js',
          include: [''],
          out: 'web/optimized.req.js'
        }
      }
    },
    karma: {
      options: {
        configFile: 'karma.conf.js',
        port: 9999,
        browsers: ['Chrome', 'PhantomJS']
      },
      cicd: {
        singleRun: true,
        browsers: ['PhantomJS']
      },
      dev: {
        reporters: 'dots'
      }
    }
  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-requirejs');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-karma');

  // Default task(s).
  grunt.registerTask('default', ['clean', 'requirejs']);


  grunt.registerTask('hello', () => {
    console.log('Hello from hello task!!');
  });
};