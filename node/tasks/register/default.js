module.exports = function (grunt) {
	grunt.registerTask('default', ['compileAssets', 'linkAssets', 'apidoc', 'watch']);
};
