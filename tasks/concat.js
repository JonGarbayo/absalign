/**
 * Concatenate files.
 *
 * @link https://github.com/gruntjs/grunt-contrib-concat
 * -----------------------------------------------------------------------------
 *
 * Configured to concatenate JavaScript files of the demo.
 *
 */

module.exports =
{
    options:
    {
        separator: '\n\n',
    },
    demo:
    {
        src: ['demo/.tmp/js/absalign.min.js', 'demo/.tmp/js/jquery-*.min.js'],
        dest: 'demo/.tmp/js/output/vendor.min.js'
    },
};
