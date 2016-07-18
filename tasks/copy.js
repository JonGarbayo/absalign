/**
 * Copy files and folders.
 *
 * @link https://github.com/gruntjs/grunt-contrib-copy
 * -----------------------------------------------------------------------------
 *
 * Configured to copy the jQuery library from demo/src to the demo/dist. The aim
 * here is to "sandbox" the minidied demo, to get it works on a standalone way.
 *
 */

module.exports =
{
    demo:
    {
        files:
        {
            'demo/dist/vendor.js': 'demo/src/jquery-1.12.4.min.js'
        }
    }
};
