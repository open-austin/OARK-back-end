/**
 * Generate API Documentation during application start.
 *
 * ---------------------------------------------------------------
 *
 * Generate API Documentation during application start.
 *
 * For usage docs see:
 * 		https://github.com/apidoc/grunt-apidoc
 *
 */
module.exports = function(grunt) {

	grunt.config.set('apidoc', {
		dev: {
			src: "api/",
			dest: ".tmp/public/",
			template: "apidoc/",
			options: {
				includeFilters: [ ".*\\.js$" ],
				marked: {
					gfm: true
				}
			}
		}
	});

	grunt.loadNpmTasks('grunt-apidoc');
};
