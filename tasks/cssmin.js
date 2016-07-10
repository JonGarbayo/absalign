// Minifying CSS files

module.exports =
{
    dist:
    {
        files:
        [{
            expand: true,
            cwd: 'dist/',
            src: ['*.css'],
            dest: 'dist/',
            ext: '.min.css'
        }]
    },
    demo:
    {
        files:
        [{
            expand: true,
            cwd: 'demo/dist/',
            src: ['*.css'],
            dest: 'demo/dist/'
        }]
    }
};
