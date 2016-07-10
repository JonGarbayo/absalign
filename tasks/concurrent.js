// Executing both minification operations at the same time

module.exports =
{
    minAll: ['cssmin', 'uglify', 'htmlmin'],
    minPackage: ['cssmin:dist', 'uglify:dist'],
    minDemo: ['cssmin:demo', 'uglify:demo', 'htmlmin:demo']
};
