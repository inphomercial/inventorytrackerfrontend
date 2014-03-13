module.exports = function(grunt) {
    var glob = {
        scss: [
            'assets/scss/*.scss'
        ]
    };

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        sass: {
            dist: {
                options: {
                    quiet: true,
                    style: 'compressed'
                },
                files: {
                    'assets/css/base.css': 'assets/scss/base.scss',
                }
            }
        },

        scsslint: {
            allFiles: ['assets/scss/*.scss'],
            options: {
                config: 'config/scss-lint.yml',
                reporterOutput: 'build/lint/scss-lint-report.xml'
            },
        },

        watch: {
            scss: {
                files: glob.scss,
                tasks: ['sass', 'quality']
            },
            pep8: {
                files: glob.python,
                tasks: ['shell:pep8']
            }
        }
    });

    grunt.registerTask('default', ['watch']);
    grunt.registerTask('scss', ['scss']);
    grunt.registerTask('quality', ['scsslint', 'shell:pep8']);

    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-scss-lint');
