/**
 * Concatenate files.
 *
 * @link https://github.com/gruntjs/grunt-contrib-concat
 * -----------------------------------------------------------------------------
 *
 * Configured to concatenate CSS and JS vendor files of the demo.
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
        files:
        [{
            src: 'demo/.tmp/css/*.min.css',
            dest: 'demo/.tmp/css/output/vendor.min.css'
        },
        {
            src: 'demo/.tmp/js/*.min.js',
            dest: 'demo/.tmp/js/output/vendor.min.js'
        }]
    },
};
