/**
 * Concatenate files.
 *
 * @link https://github.com/gruntjs/grunt-contrib-concat
 * -----------------------------------------------------------------------------
 *
 * Configured to concatenate JS vendor files of the demo.
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
        src: 'demo/.tmp/js/*.min.js',
        dest: 'demo/.tmp/js/output/vendor.min.js',
    },
};
