/**
 * Minify files with UglifyJS.
 *
 * @link https://github.com/gruntjs/grunt-contrib-uglify
 * -----------------------------------------------------------------------------
 *
 * Configured to minify absalign.js and the demo JavaScript file.
 *
 */

module.exports =
{
    options:
    {
    // Preserve the header comments (which begins by /**!)
        preserveComments: 'some'
    },
    dist:
    {
        files:
        {
            'dist/absalign.min.js': 'dist/absalign.js'
        }
    },
    demo:
    {
        expand: true,
        cwd: 'demo/.tmp/js/output/',
        src: ['*.js', '!*.min.*'],
        dest: 'demo/dist/js',
        ext: '.min.js'
    }
};
