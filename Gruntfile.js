module.exports = function (grunt) {
	grunt.initConfig({
		jshint: {
			dev: [
				'Gruntfile.js',
				'server/**/*.js',
				'client/**/*.js',
				'!client/bower_components/**/*.js',
				'!client/build/*.js',
			],
			prod: 'client/build/bundle.js',
		},
		concat: {
			options: {
				"sourceMap": true
			},
			js: {
				files: {
					'client/build/bundle.js': [
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
						'client/app.module.js',
						'client/*.js',
						'client/**/*.js'
					]
				}
			}
		},
		clean: {
		  build: ["client/build"]
		},
		less: {
			compile: {
				files: {
					'build/css/compiled.css': 'client/**/*.less'
				}
			}
		}
	});
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-clean');
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.registerTask('jshint', ['jshint:dev']);
	grunt.registerTask('default', ['clean', 'concat']);
};