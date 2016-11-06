/**
 * Minify HTML.
 *
 * @link https://github.com/gruntjs/grunt-contrib-htmlmin
 * -----------------------------------------------------------------------------
 *
 * Configured to minify the demo HTML file from [demo/.tmp] to
 * [demo/.tmp/output].
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
            'demo/.tmp/output/index.html': 'demo/.tmp/index.html'
        }
    }
};
