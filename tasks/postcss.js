// Autoprefixing the transforms and transform-styles properties
// There is no "all" parameter, and all prefixes are needed, so used a BIG value

module.exports =
{
    options:
    {
        processors:
        [
            require('autoprefixer')({browsers: 'last 9999 versions'})
        ]
    },
    dist:
    {
        src: 'dist/absalign.css'
    },
    demo:
    {
        files:
        {
            'demo/dist/demo.min.css': 'demo/src/demo.css'
        }
    }
};
