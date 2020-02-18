module.exports = (grunt) => {
    //default init of process.env.VERSION property
    if (process.env.VERSION == undefined) {
        process.env.VERSION = '0_0_1';
    }

    /*
        task defination for grunt
        The default task of this grunt will do :
        1. clean the folder pattern snapshot_* and release_* if any
        2. create two folder wit name : snapshot_<%=process.env.VERSION %> and release_<%= pkg.version %>
        3. <%=process.env.VERSION %> will replace with theversion passed from 'VERSION=1.2 grunt' command
        4. <%= pkg.version %> will replace with the version tag from package.json
        5. replace the VERSION place holder in index.html with either <%=process.env.VERSION %> or <%= pkg.version %>  
     */
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        clean: 'build_*',
        mkdir: {
            all: {
                options: {
                    create: 'build_<%=process.env.VERSION %>'
                }
            }
        },
        'string-replace': {
            dist: {
                files: [{
                    src: 'template.html',
                    dest: 'build_<%=process.env.VERSION %>/index.html'
                }],
                options: {
                    replacements: [{
                        pattern: '<link href="/web/project1/VERSION/css/application.css" rel="stylesheet"/>',
                        replacement: '<link href="/web/project1/<%=process.env.VERSION %>/css/application.css" rel="stylesheet"/>'
                    },
                    {
                        pattern: '<script type="text/javascript" src="/web/project1/VERSION/js/application.js"></script>',
                        replacement: '<script type="text/javascript" src="/web/project1/<%=process.env.VERSION %>/js/application.js"></script>'
                    }
                    ]
                }
            }
        },
        copy: {
            main: {
                expand: true,
                src: ['css/**', 'js/**'],
                dest: 'build_<%=process.env.VERSION %>/<%=process.env.VERSION %>/',
            }
        },
        'compile-handlebars': {
            dynamicTemplateData: {
                files: [{
                    src: 'template.hbs',
                    dest: 'build_<%=process.env.VERSION %>/index.html'
                }],
                templateData: {
                    "VERSION": "<%=process.env.VERSION %>"
                }
            }
        }

    });//end of initConfig



    /*
        loading the task , so that we can use that inside initConfig callback
     */
    grunt.loadNpmTasks('grunt-mkdir');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-string-replace');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-compile-handlebars');

    // task(s).

    //grunt.registerTask('default', ['clean', 'copy', 'string-replace']);
    grunt.registerTask('default', ['clean', 'copy', 'compile-handlebars']);

    /*
       task
       to execute the below task , use below command
       /> grunt hello
       /> VERSION=1_1_0 grunt version
       The above command will print the console.log message
    */
    grunt.registerTask('hello', () => {
        console.log('hello from hello route');
    });

    grunt.registerTask('version', () => {
        console.log('The version passed from cli is : ' + process.env.VERSION);
        console.log('The version passed from cli is : ' + process.env.TEXT);
    });
};