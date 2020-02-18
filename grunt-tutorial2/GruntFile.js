module.exports = (grunt)=>{
    //default init of process.env.VERSION property
    if(process.env.VERSION==undefined){
        process.env.VERSION = '0_0_2';
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
        clean: 'build2_*',
        mkdir: {
            all: {
                options: {
                    create: 'build2_<%=process.env.VERSION %>'
                }
            }
        },
        'string-replace': {
            dist: {
                files: [{
                    src: 'template.html',
                    dest: 'build2_<%=process.env.VERSION %>/index.html'
                }],
                options: {
                    replacements: [{
                        pattern: '<link href="/web/project2/VERSION/css/application.css" rel="stylesheet"/>',
                        replacement: '<link href="/web/project2/<%=process.env.VERSION %>/css/application.css" rel="stylesheet"/>'
                    },
                    {
                        pattern: '<script type="text/javascript" src="/web/project2/VERSION/js/application.js"></script>',
                        replacement: '<script type="text/javascript" src="/web/project2/<%=process.env.VERSION %>/js/application.js"></script>'
                    }
                    ]
                }
            }
        },
        copy: {
            main: {
                expand: true,
                src: ['css/**','js/**'],
                dest: 'build2_<%=process.env.VERSION %>/<%=process.env.VERSION %>/',
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

    // task(s).
    grunt.registerTask('default', ['clean','copy','string-replace']);

     /*
        task
        to execute the below task , use below command
        /> grunt hello
        /> VERSION=1_1_0 grunt version
        The above command will print the console.log message
     */
    grunt.registerTask('hello',()=>{
        console.log('hello from hello route');
    });

    grunt.registerTask('version',()=>{
        console.log('The version passed from cli is : '+process.env.VERSION);
        console.log('The version passed from cli is : '+process.env.TEXT);
    });
};