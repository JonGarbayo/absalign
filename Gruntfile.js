// jshint node:true

module.exports = function(grunt)
{
    require('time-grunt')(grunt);
    require('load-grunt-tasks')(grunt);

    grunt.initConfig(require('load-grunt-configs')(grunt,
    {
    // Getting package.json info
        pkg: grunt.file.readJSON("package.json"),

        config:
        {
            src: "tasks/*.js"
        },
    }));

    grunt.registerTask('buildAll',
    [
        'clean',
        'compass',
        'css_important:dist',
        'postcss:dist',
        'csscomb:dist',
        'concurrent:minPackage',
        'copy:demo_tmp_dynamic',
        'copy:demo_tmp_static',
        'concat:demo',
        'copy:demo_output_dynamic',
        'copy:demo_output_static',
        'postcss:demo',
        'processhtml',
        'replace',
        'concurrent:minDemo',
        'copy:demo_dist'
    ]);

    grunt.registerTask('buildPackage',
    [
        'clean:dist',
		'compass:dist',
        'css_important:dist',
        'postcss:dist',
		'csscomb:dist',
		'replace:dist',
		'concurrent:minPackage'
    ]);

    grunt.registerTask('buildDemo',
    [
        'clean:demo',
		'copy:demo_tmp_dynamic',
		'copy:demo_tmp_static',
		'concat:demo',
		'copy:demo_output_dynamic',
		'copy:demo_output_static',
		'postcss:demo',
		'processhtml:demo',
		'replace:demo',
		'concurrent:minDemo',
		'copy:demo_dist'
    ]);
};
