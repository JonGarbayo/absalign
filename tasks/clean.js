/**
 * Clear files and folders.
 *
 * @link https://github.com/gruntjs/grunt-contrib-clean
 * -----------------------------------------------------------------------------
 *
 * Configured to delete files and folders in [dist] and [demo]. The aim here is
 * to start grunt operations with empty target directories.
 *
 * # dist:
 *   Deletes all files and folders in [dist].
 *
 * # demo:
 *   Deletes all files in the [demo] subfolders, except in [src]. Folders will
 *   be kept.
 *
 * # demo_concat:
 *   Deletes concatenated source files in [demo/.tmp].
 *
 */

module.exports =
{
    dist: 'dist/*',
    demo:
    {
        dot: true,              // Includes dotted folder names
        filter: 'isFile',
        src: 'demo/!(src)/**'
    },
    demo_concat:
    {
        src: ['demo/.tmp/js/demo.js', 'demo/.tmp/js/main.js'],
    }
};
