/**
 * Minify HTML.
 *
 * @link https://github.com/gruntjs/grunt-contrib-htmlmin
 * -----------------------------------------------------------------------------
 *
 * Configured to minify the demo HTML file.
 *
 */

module.exports =
{
    demo:
    {
        options:
        {
            removeComments: true,
            collapseWhitespace: true
        },
        files:
        {
            'demo/dist/demo.min.html': 'demo/dist/demo.min.html'
        }
    }
};
