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

    grunt.registerTask('buildAll', ['clean', 'compass', 'postcss', 'csscomb', 'copy:demo', 'processhtml', 'replace', 'concurrent:minAll']);
    grunt.registerTask('buildPackage', ['clean:dist', 'compass:dist', 'postcss:dist', 'csscomb:dist', 'replace:dist', 'concurrent:minPackage']);
    grunt.registerTask('buildDemo', ['clean:demo', 'copy:demo', 'postcss:demo', 'processhtml:demo', 'replace:demo', 'concurrent:minDemo']);
};
