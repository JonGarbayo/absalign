/**
 * Minify files with UglifyJS.
 *
 * @link https://github.com/gruntjs/grunt-contrib-uglify
 * -----------------------------------------------------------------------------
 *
 * Configured to minify absalign.js and the demo JS files.
 *
 * # dist:
 *   Minifies absalign.js in [dist] to a new .min file.
 *
 * # demo:
 *   Minifies all non minified demo JS files in [demo/.tmp/js] to their [output]
 *   folder, as new .min files.
 *
 */

module.exports =
{
    options:
    {
    // Preserve the header comments (which start with /*!)
        preserveComments: function (node, comment)
        {
            return comment.value[0] === '!';
        }
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
        cwd: 'demo/.tmp/js/',
        src: ['*.js', '!*.min.*'],
        dest: 'demo/.tmp/js/output/',
        ext: '.min.js'
    }
};
