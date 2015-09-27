/*global module:false*/
    module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        react: {
            single_file_output: {
                files: {
                  'build/tweet.js': 'src/tweet.jsx'
                }
            }
        },

        sass: {
            dist: {
                files: {
                  'build/tweet.css' : 'src/style.sass'
                }
            }
        },

        watch: {
            react: {
                files: 'src/*.jsx',
                tasks: ['react']
            },

            css: {
                files: 'src/*.sass',
                tasks: ['sass']
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-react');
    grunt.loadNpmTasks('grunt-contrib-sass');

    grunt.registerTask('default', ['react', "sass"]);
};