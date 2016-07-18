/**
 * Process html files at build time to modify them depending on the release
 * environment.
 *
 * @link https://github.com/dciccale/grunt-processhtml
 * -----------------------------------------------------------------------------
 *
 * Configured to replace scripts and links tags src with their minified
 * equivalent in the demo HTML file.
 *
 */

module.exports =
{
    demo:
    {
        files:
        {
            'demo/dist/demo.min.html': 'demo/src/demo.html'
        }
    }
};
