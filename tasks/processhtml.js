/**
 * Process html files at build time to modify them depending on the release
 * environment.
 *
 * @link https://github.com/dciccale/grunt-processhtml
 * -----------------------------------------------------------------------------
 *
 * Configured to replace <script>s and <link>s tags src with their minified
 * equivalent in the demo HTML file, in [demo/.tmp].
 *
 */

module.exports =
{
    demo:
    {
        files:
        {
            'demo/.tmp/index.html': 'demo/.tmp/index.html'
        }
    }
};
