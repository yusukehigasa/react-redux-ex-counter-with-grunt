module.exports = function(grunt) {
    // grunt tasks setting
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        watch: {
            options: {
                livereload: true
            },
            scripts: {
                files: ['src/**/*.js'],
                /*tasks: ['babel']*/
                tasks: ['browserify']
            }
        },
        connect: {
            server: {
                options: {
                    port: 7070,
                    hostname: 'localhost'
                }
            }
        },
        /*babel: {
            options: {
                plugins: ['transform-react-jsx'],
                presets: ['es2015', 'react']
            },
            dist: {
                src: 'src/main.js',
                dest: 'dist/bundle.js'
            }
        }*/
        browserify: {
            options: {
                // "es2015" changes ES2015 to ES5, and "react" compiles jsx
                transform: [['babelify', {presets: ['es2015', 'react']}]]
            },
            dist: {
                src: 'src/main.js',
                dest: 'dist/bundle.js'
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-browserify');
    /*grunt.loadNpmTasks('grunt-babel');*/

    // grunt tasks regist
    grunt.registerTask('default', ['connect','watch']);
};