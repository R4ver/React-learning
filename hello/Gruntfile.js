/*global module:false*/
    module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        react: {
            single_file_output: {
                files: {
                  'build/hello.js': 'src/hello.jsx'
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

    grunt.registerTask('default', ['react']);
};