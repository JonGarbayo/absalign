/**
 * Compress CSS files.
 *
 * @link https://github.com/gruntjs/grunt-contrib-cssmin
 * -----------------------------------------------------------------------------
 *
 * Configured to minify absalign.css and the demo stylesheet.
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
            'demo/dist/demo.min.css': 'demo/dist/demo.min.css'
        }
    }
};
