/**
 * Grunt plugin for CSScomb—CSS coding style formatter.
 *
 * @link https://github.com/csscomb/grunt-csscomb
 * -----------------------------------------------------------------------------
 *
 * Configured to clean the generated absalign.css file, because Compass
 * doesn't keep the ident from source.
 *
 */

module.exports =
{
    dist:
    {
        files:
        {
            'dist/absalign.css': 'dist/absalign.css'
        }
    }
};
