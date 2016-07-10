// Minifying HTML files

module.exports =
{
    demo:
    {
        options:
        {
            removeComments: true,
            collapseWhitespace: true
        },
        files:
        {
            'demo/dist/demo.min.html': 'demo/dist/demo.min.html'
        }
    }
};
