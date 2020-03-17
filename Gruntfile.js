// /* global module: true */
// module.exports = function (grunt) {
//     grunt.initConfig({
//       eslint: {
//         options: {
//           configFile: '.eslintrc.json'
//         },
//         target: ['*.js']
//       },
//       csslint: {
//         options: {
//           csslintrc: '.csslintrc'
//         },
//         src: '*.css'
//       },
//       htmlhint: {
//         options: {
//           htmlhintrc: '.htmlhintrc'
//         },
//         src: '*.html'
//       },
//       mocha: {
//         test: {
//           src: ['test/index.html'],
//         },
//         options: {
//           run: true,
//           reporter: 'Spec'
//         }
//       },
//       htmlmin: {
//         options: {
//           collapseWhitespace: true,
//           preserveLineBreaks: false
//         },
//         files: {
//           src: 'dist/index.html',
//           dest: 'dist/index.html'
//         }
//       },
//       cssmin: {
//         'dist/index.css': 'index.css'
//       },
//       uglify: {
//         release:{
//           files: {
//             'dist/index.js': 'dist/baidu.js',
//           }
//         }
//       },
//       useminPrepare: {
//         html: 'index.html',
//         options: {
//           dest: 'dist'
//         }
//       },
//       usemin: {
//         html: ['dist/index.html']
//       },
//       concat: {
//         options: {
//           separator: ';'
//         },
//         js: {
//           src: ['index.js', 'calc.js'],
//           dest: 'dist/baidu.js'
//         }
//       },
//       clean: ['dist/baidu.js', '.tmp'],
//       copy: {
//         html: {
//           src: './index.html',
//           dest: './dist/index.html'
//         }
//       },
//       imgmin: {                               
//         files: {
//           expand: true,
//           src: ['img/*.{png,jpg,gif}'],
//           dest: 'dist/'
//         }
//       }
//     });

//     grunt.loadNpmTasks('grunt-contrib-csslint');
//     grunt.loadNpmTasks('grunt-htmlhint');
//     grunt.loadNpmTasks('grunt-eslint');
//     grunt.loadNpmTasks('grunt-mocha');
//     grunt.loadNpmTasks('grunt-contrib-htmlmin');
//     grunt.loadNpmTasks('grunt-contrib-cssmin');
//     grunt.loadNpmTasks('grunt-contrib-uglify');
//     grunt.loadNpmTasks('grunt-contrib-concat');
//     grunt.loadNpmTasks('grunt-contrib-copy');
//     grunt.loadNpmTasks('grunt-usemin');
//     grunt.loadNpmTasks('grunt-contrib-clean');

//     grunt.registerTask('lint', ['htmlhint', 'csslint', 'eslint']);
//     grunt.registerTask('unitTest', ['mocha']);
//     grunt.registerTask('release', ['copy', 'useminPrepare', 'concat', 'uglify', 'usemin', 'cssmin', 'htmlmin', 'clean']);
//   };
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