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

// Registering dynamic and static subtasks in one task
    grunt.registerTask('copy:demo_tmp',
    [
        'copy:demo_tmp_dynamic',
        'copy:demo_tmp_static'
    ]);

// buildAll: build package and demo
    grunt.registerTask('buildAll',
    [
        'clean',
        'compass',
        'css_important:dist',
        'postcss:dist',
        'csscomb:dist',
        'replace:dist',
        'concurrent:minPackage',
        'copy:demo_tmp',
        'concat:demo',
        'postcss:demo',
        'processhtml',
        'replace:demo',
        'concurrent:minDemo',
        'copy:demo_dist'
    ]);

// buildPackage: build only package
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

// buildDemo: build only demo
    grunt.registerTask('buildDemo',
    [
        'clean:demo',
        'copy:demo_tmp',
		'concat:demo',
		'postcss:demo',
		'processhtml:demo',
		'replace:demo',
		'concurrent:minDemo',
		'copy:demo_dist'
    ]);
};
