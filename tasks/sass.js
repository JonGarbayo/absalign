/**
 * Compile Sass to CSS.
 *
 * @link https://github.com/sindresorhus/grunt-sass
 * -----------------------------------------------------------------------------
 *
 * Configured to compile the SCSS files from [src] to [dist], as absalign.css.
 *
 */

module.exports =
{
    dist:
    {
        files:
        {
            'dist/absalign.css': 'src/absalign.scss'
        }
    }
};
