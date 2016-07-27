/**
 * Apply several post-processors to your CSS using PostCSS.
 *
 * @link https://github.com/nDmitry/grunt-postcss
 * -----------------------------------------------------------------------------
 *
 * Configured to autoprefix absalign.css and demo styelsheet, instead of
 * prefixing by hand in source.
 *
 */

module.exports =
{
    options:
    {
        processors:
        [
        // There is no "all" parameter, and all prefixes are needed, so used a BIG value
            require('autoprefixer')({browsers: 'last 9999 versions'})
        ]
    },
    dist:
    {
        src: 'dist/absalign.css'
    },
    demo:
    {
        src: 'demo/.tmp/css/app.css'
    }
};
