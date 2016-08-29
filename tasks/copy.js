/**
 * Copy files and folders.
 *
 * @link https://github.com/gruntjs/grunt-contrib-copy
 * -----------------------------------------------------------------------------
 *
 * Configured to copy the demo files to some others folders, before or after
 * performing operations like CSS Comb, minification, etc. The central folder of
 * all this work is [.tmp].
 * The aim here is to perform all operations on the same place, like a factory.
 *
 * *_dynamic and *_static tasks are designed to be part of a unique logic, but
 * grunt doesn't allow the use of dynamic and static file selectors in the same
 * target.
 *
 * # demo_tmp_dynamic:
 *   Copies all files from [demo/src] to [demo/.tmp].
 *   Keeps folder architecture.
 *
 * # demo_tmp_static:
 *   Copies minified package dist files from [dist] to their respective folder
 *   in [demo/.tmp].
 *
 * # demo_dist:
 *   Copies minified CSS, JS and HTML demo files from their respective [output]
 *   folder to [dist], also in their respective folder.
 *
 */

module.exports =
{
    demo_tmp_dynamic:
    {
        expand: true,
        cwd: 'demo/src/',
        src: ['**'],
        dest: 'demo/.tmp/'
    },
    demo_tmp_static:
    {
        files:
        [{
            src: 'dist/absalign.min.css',
            dest: 'demo/.tmp/css/absalign.min.css'
        },
        {
            src: 'dist/absalign.min.js',
            dest: 'demo/.tmp/js/absalign.min.js'
        }]
    },
    demo_dist:
    {
        files:
        [{
            expand: true,
            cwd: 'demo/.tmp/css/output/',
            src: ['*.min.css'],
            dest: 'demo/dist/css/'
        },
        {
            expand: true,
            cwd: 'demo/.tmp/js/output/',
            src: ['*.min.js'],
            dest: 'demo/dist/js/'
        },
        {
            expand: true,
            cwd: 'demo/.tmp/output/',
            src: ['*.min.html'],
            dest: 'demo/dist/'
        }]
    }
};
