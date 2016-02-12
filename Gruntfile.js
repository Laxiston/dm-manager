// TODO: uglify, less, livereload

function gruntfile(grunt) {
  grunt.initConfig({
    eslint: {
      gruntfile: ['Gruntfile.js'],
      client: {
        src: ['client/**/*.js', '!client/build/**/*'],
        options: {
          configFile: '.eslintrc.json',
        },
      },
      server: {
        src: ['server/**/*.js'],
        options: {
          configFile: '.eslintrc.json',
        },
      },
    },
    concat: {
      options: {
        'sourceMap': false,
      },
      external: {
        files: {
          'client/build/external/external.js': [
            'bower_components/jquery/dist/jquery.js',
            'bower_components/angular/angular.js',
            'bower_components/angular-ui-router/release/angular-ui-router.js',
            'bower_components/angular-ui-router.stateHelper/statehelper.js',
            'bower_components/angular-ui-router-tabs/src/ui-router-tabs.js',
            'bower_components/a0-angular-storage/dist/angular-storage.js',
            'bower_components/angular-jwt/dist/angular-jwt.js',
            'bower_components/bootstrap/dist/js/bootstrap.min.js',
            'bower_components/angular-bootstrap/ui-bootstrap-tpls.js',
            'bower_components/angular-animate/angular-animate.js',
          ],
        },
      },
      internal: {
        files: {
          'client/build/internal/bundle.js': [
            'client/app.module.js',
            'client/*.js',
            'client/**/*.js',
            '!client/build/**/*.js',
          ],
        },
      },
    },
    clean: {
      internal: ['client/build/internal/bundle.js'],
      external: ['client/build/external/external.js'],
    },
    less: {
      compile: {
        files: {
          'build/css/compiled.css': 'client/**/*.less',
        },
      },
    },
    watch: {
      client: {
        files: [
          'client/**/*.js',
          '!client/build/**/*.js',
        ],
        tasks: ['client-internal'],
      },
      server: {
        files: ['server/**/*.js'],
        tasks: ['server-internal'],
      },
    },
  });
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('gruntify-eslint');
  grunt.registerTask('client-external', ['clean:external', 'concat:external']);
  grunt.registerTask('client-internal', ['eslint:client', 'clean:internal', 'concat:internal']);
  grunt.registerTask('server-internal', ['eslint:server']);
  grunt.registerTask('build', ['clean:internal', 'clean:external', 'concat:internal', 'concat:external']);
  grunt.registerTask('default', ['watch:client']);
}

module.exports = gruntfile;