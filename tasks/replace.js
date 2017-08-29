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
 * # dist:
 *   Completes the header comments in absalign.js and absalign.css in [dist]
 *   with package name, version, author, repo URL and licence URL.
 *   Also cleans unwanted compass traces.
 *
 * # demo:
 *   Adds absalign package version number to the demo HTML file, in [demo/.tmp].
 *   In the same file, also changes the absalign logo path to get it from
 *   package root.
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
            },

			patterns:
			[{
				match: /\/\* autoprefixer: off \*\//g,
				replacement: ''
			},
			{
				match: /\*\/\n\n\/\*/g,
				replacement: '*/\n/*'
			}]
        },
        files:
        {
            'dist/absalign.css': 'dist/absalign.css',
            'dist/absalign.js': 'dist/absalign.js'
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
            },

			patterns:
			[{
			    match: /\.\.\/\.\.\/absalign-logo\.svg/g,
			    replacement: 'absalign-logo.svg'
			}]
        },
        files:
        {
            'demo/.tmp/index.html': 'demo/.tmp/index.html'
        }
    }
};
