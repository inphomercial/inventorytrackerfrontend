module.exports = function(grunt) {
    var glob = {
        sass: [
            'assets/sass/*.scss'
        ],
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
                    'assets/css/base.css': 'assets/sass/base.scss',
                }
            }
        },

        scsslint: {
            allFiles: glob.sass,
            options: {
                config: 'config/scss-lint.yml',
                reporterOutput: 'build/lint/scss-lint-report.xml'
            },
        },

        watch: {
            scss: {
                files: glob.sass,
                tasks: ['sass', 'quality']
            }
        }
    });

    grunt.registerTask('default', ['watch']);
    grunt.registerTask('sass', ['sass']);
    grunt.registerTask('quality', ['scsslint']);

    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-scss-lint');
}