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
    demo_tmp_dynamic:
    {
        expand: true,
        cwd: 'demo/src/',
        src: ['**/*.*'],
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
    demo_output_dynamic:
    {
        expand: true,
        cwd: 'demo/.tmp/js/',
        src: ['app.js', 'ui.js'],
        dest: 'demo/.tmp/js/output/'
    },
    demo_output_static:
    {
        src: 'demo/.tmp/css/absalign.min.css',
        dest: 'demo/.tmp/css/output/vendor.min.css'
    },
    demo_dist:
    {
        files:
        [{
            expand: true,
            cwd: 'demo/.tmp/js/output/',
            src: ['*.min.js'],
            dest: 'demo/dist/js/'
        },
        {
            expand: true,
            cwd: 'demo/.tmp/css/output/',
            src: ['*.min.css'],
            dest: 'demo/dist/css/'
        }]
    }
};
