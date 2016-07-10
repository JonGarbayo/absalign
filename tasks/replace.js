// Adding some package info, like version or author, to header comments and demo

module.exports =
{
    dist:
    {
        options:
        {
            variables:
            {
            // Replaces "@@key" with "value"
                'name': "<%= pkg.name %>",
                'version': "<%= pkg.version %>",
                'author': "<%= pkg.author %>",
                'homepage': "<%= pkg.homepage %>"
            }
        },
        files:
        {
            'dist/absalign.css': ['dist/absalign.css'],
            'dist/absalign.js': ['src/absalign.js']
        }
    },
    demo:
    {
        options:
        {
            variables:
            {
            // Replaces "@@key" with "value"
                'version': "<%= pkg.version %>"
            }
        },
        files:
        {
            'demo/dist/demo.min.html': 'demo/dist/demo.min.html'
        }
    }
};
