/**
 * Compile Compass to CSS.
 *
 * @link https://github.com/gruntjs/grunt-contrib-compass
 * -----------------------------------------------------------------------------
 *
 * Configured to compile the SCSS files from the src folder to
 * dist/absalign.css.
 *
 */

module.exports =
{
    dist:
    {
        options:
        {
            sassDir: 'src',
            cssDir: 'dist',
            noLineComments: true    // Disable the comment traces generated by compass
        }
    }
};
