// Minifying JS file

module.exports =
{
    options:
    {
    // Preserve the header comments (which begins by /**!)
        preserveComments: 'some'
    },
    dist:
    {
        files:
        {
            'dist/absalign.min.js': 'dist/absalign.js'
        }
    },
    demo:
    {
        files:
        {
            'demo/dist/demo.min.js': 'demo/src/demo.js'
        }
    }
};
