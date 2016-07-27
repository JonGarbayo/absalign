/**
 * Grunt plugin that adds !important tags to CSS styles.
 *
 * @link https://github.com/mendeelise/css-important
 * -----------------------------------------------------------------------------
 *
 * Configured to automatically add the !important label to all of the
 * absalign.css properties.
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
