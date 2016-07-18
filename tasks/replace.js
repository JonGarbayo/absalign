/**
 * Replace text patterns with applause.
 *
 * @link https://github.com/outaTiME/grunt-replace
 * -----------------------------------------------------------------------------
 *
 * Configured to add some package info, like version or author, to header
 * comments of files in dist folder and in demo HTML file. Thanks to this, a
 * version change in the package.json is reflected everywhere it needs at each
 * build.
 *
 */

module.exports =
{
    dist:
    {
        options:
        {
            variables:
            {
            // Replaces "@@key" with "value"
                'name': "<%= pkg.name %>",
                'version': "<%= pkg.version %>",
                'author': "<%= pkg.author %>",
                'homepage': "<%= pkg.homepage %>"
            }
        },
        files:
        {
            'dist/absalign.css': 'dist/absalign.css',
            'dist/absalign.js': 'src/absalign.js'
        }
    },
    demo:
    {
        options:
        {
            variables:
            {
            // Replaces "@@key" with "value"
                'version': "<%= pkg.version %>"
            }
        },
        files:
        {
            'demo/dist/demo.min.html': 'demo/dist/demo.min.html'
        }
    }
};
