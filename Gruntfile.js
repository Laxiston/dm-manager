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
			js: {
				files: {
					'client/build/bundle.js': [
						// 'client/*.js',
						'client/**/*.js',
						'!client/bower_components/**/*.js',
					]
				}
			}
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
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.registerTask('default', ['jshint:dev']);
	grunt.registerTask('build', ['concat', 'jshint:prod']);
};

// files: [
// 'src/public/js/vendor/angular.js',
// 'src/public/js/app.js',
// 'src/public/js/app/**/*.js'
// ]