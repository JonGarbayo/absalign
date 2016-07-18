/**
 * Clear files and folders.
 *
 * @link https://github.com/gruntjs/grunt-contrib-clean
 * -----------------------------------------------------------------------------
 *
 * Configured to delete all files in the dist and the demo/dist folder. The aim
 * here is to start grunt operations with empty target directories.
 *
 */

module.exports =
{
    dist: 'dist/*',
    demo: 'demo/dist/*'
};
