/* global module: true */
module.exports = function (grunt) {
    grunt.initConfig({
        htmlmin: {
            options: {
                removeComments: true,
                collapseWhitespace: true
            },
            files: {
                src: './index.html',
                dest: './compression/index.min.html'
            }
        },
        cssmin: {
            './compression/index.min.css': './index.css'
        },
        uglify: {
            './compression/index.min.js': './index.js'
        }

    });

    grunt.loadNpmTasks('grunt-contrib-htmlmin');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    
    grunt.registerTask('default', ['htmlmin','cssmin','uglify']);

   
};