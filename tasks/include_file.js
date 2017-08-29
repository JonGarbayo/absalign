/**
 * Include files into other files, optional base64 encoding.
 *
 * @link https://github.com/Sjeiti/grunt-include-file
 * -----------------------------------------------------------------------------
 *
 * Configured to include pregenerated absalign classes in the Javascript
 * polyfill.
 *
 */

module.exports =
{
    dist:
    {
        cwd: 'src/',
        src: ['absalign.js'],
        dest: 'dist/'
    }
};
