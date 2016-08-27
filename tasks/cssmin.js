/**
 * Compress CSS files.
 *
 * @link https://github.com/gruntjs/grunt-contrib-cssmin
 * -----------------------------------------------------------------------------
 *
 * Configured to minify absalign.css and the demo stylesheet.
 *
 * # dist:
 *   Minifies absalign.css from [dist] to absalign.min.css, in the same folder.
 *
 * # demo:
 *   Minifies app.css from [demo/.tmp/css] to its [output] folder, as
 *   app.min.css.
 *
 */

module.exports =
{
    dist:
    {
        files:
        {
            'dist/absalign.min.css': 'dist/absalign.css'
        }
    },
    demo:
    {
        files:
        {
            'demo/.tmp/css/output/app.min.css': 'demo/.tmp/css/app.css'
        }
    }
};
