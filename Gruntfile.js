// jshint node:true

module.exports = function(grunt)
{
    require('time-grunt')(grunt);
    require('load-grunt-tasks')(grunt);

    grunt.initConfig(require('load-grunt-configs')(grunt,
    {
    // Getting package.json info
        pkg: grunt.file.readJSON("package.json"),

        config:
        {
            src: "tasks/*.js"
        },
    }));

// Registering dynamic and static subtasks in one task
    grunt.registerTask('copy:demo_tmp',
    [
        'copy:demo_tmp_dynamic',
        'copy:demo_tmp_static'
    ]);

    grunt.registerTask('generateAbsalignClasses', 'A task to dynamically create absalign classes for the JS polyfill.', function ()
    {
    // Declaring parts of classes names
        var positions =
        [
            'abs',
            'fix'
        ];

        var xAxes =
        [
            'left',
            'center',
            'right'
        ];

        var yAxes =
        [
            'top',
            'middle',
            'bottom'
        ];

        var pseudos =
        [
            false,
            'before',
            'after'
        ];

    // Declaring classes lists
    // Lists by position
        var absClasses = [];
        var fixClasses = [];

        var transformedClasses =
        [
            // '.absalign-animate'    // All absalign-animate classes are transformed
        ];


    // Axes lists
        var leftTopClasses = [];
        var leftMiddleClasses = [];
        var leftBottomClasses = [];

        var centerTopClasses = [];
        var centerMiddleClasses = [];
        var centerBottomClasses = [];

        var rightTopClasses = [];
        var rightMiddleClasses = [];
        var rightBottomClasses = [];


    // Mono-axis lists
        var leftClasses = [];
        var centerClasses = [];
        var rightClasses = [];

        var topClasses = [];
        var middleClasses = [];
        var bottomClasses = [];


    // Inanimate classes lists
        var leftBottomAnimateClasses = [];

        var centerBottomAnimateClasses = [];

        var rightTopAnimateClasses = [];
        var rightMiddleAnimateClasses = [];
        var rightBottomAnimateClasses = [];

        var rightAnimateClasses = [];
        var bottomAnimateClasses = [];


        var currentClass = '';
        var currentInanimateClass = '';

    // First loop creates the positions and axes lists
        positions.forEach(function (position)
        {
            xAxes.forEach(function (xAxis)
            {
                yAxes.forEach(function (yAxis)
                {
                    pseudos.forEach(function (pseudo)
                    {
                        is__inanimate = (xAxis === 'right' || yAxis === 'bottom');

                        if (position !== 'fix' || !pseudo)
                        {
                            currentClass = position + '-' + xAxis + '-' + yAxis;

        					if (pseudo)
        					{
        						currentClass = currentClass + '-' + pseudo;
        					}

        					if (is__inanimate)
                            {
                                currentInanimateClass = currentClass + '.absalign-animate';

                                if (pseudo)
                                {
                                    currentInanimateClass = currentInanimateClass + '-' + pseudo + ':' + pseudo;
                                }
                            }

                            if (pseudo)
                            {
                                currentClass = currentClass + ':' + pseudo;
                            }
                            else if (xAxis === 'center' || yAxis === 'middle')
                            {
                                transformedClasses.push(currentClass);
                            }

                            if (position === 'abs')
                            {
                                absClasses.push(currentClass);
                            }
                            else if (position === 'fix')
                            {
                                fixClasses.push(currentClass);
                            }

                            if (xAxis === 'left')
                            {
                                if (yAxis === 'top')
                                {
                                    leftTopClasses.push(currentClass);
                                }
                                if (yAxis === 'middle')
                                {
                                    leftMiddleClasses.push(currentClass);
                                }
                                if (yAxis === 'bottom')
                                {
                                    leftBottomClasses.push(currentClass);

                                    if (is__inanimate)
                                    {
                                        leftBottomAnimateClasses.push(currentInanimateClass);
                                    }
                                }
                            }

                            if (xAxis === 'center')
                            {
                                if (yAxis === 'top')
                                {
                                    centerTopClasses.push(currentClass);
                                }
                                if (yAxis === 'middle')
                                {
                                    centerMiddleClasses.push(currentClass);
                                }
                                if (yAxis === 'bottom')
                                {
                                    centerBottomClasses.push(currentClass);

                                    if (is__inanimate)
                                    {
                                        centerBottomAnimateClasses.push(currentInanimateClass);
                                    }
                                }
                            }

                            if (xAxis === 'right')
                            {
                                if (yAxis === 'top')
                                {
                                    rightTopClasses.push(currentClass);

                                    if (is__inanimate)
        							{
        								rightTopAnimateClasses.push(currentInanimateClass);
        							}
                                }
                                if (yAxis === 'middle')
                                {
                                    rightMiddleClasses.push(currentClass);

                                    if (is__inanimate)
        							{
        								rightMiddleAnimateClasses.push(currentInanimateClass);
        							}
                                }
                                if (yAxis === 'bottom')
                                {
                                    rightBottomClasses.push(currentClass);

                                    if (is__inanimate)
        							{
        								rightBottomAnimateClasses.push(currentInanimateClass);
        							}
                                }
                            }
                        }
                    });
                });
            });
        });

    // Second loop creates the mono-axis lists
        positions.forEach(function (position)
        {
            xAxes.forEach(function (xAxis)
            {
                pseudos.forEach(function (pseudo)
                {
                    is__inanimate = (xAxis === 'right');

                    if (position !== 'fix' || !pseudo)
                    {
                        currentClass = position + '-' + xAxis;

        				if (pseudo)
        				{
        					currentClass = currentClass + '-' + pseudo;
        				}

        				if (is__inanimate)
                        {
                            currentInanimateClass = currentClass + '.absalign-animate';

                            if (pseudo)
                            {
                                currentInanimateClass = currentInanimateClass + '-' + pseudo + ':' + pseudo;
                            }
                        }

                        if (pseudo)
                        {
                            currentClass = currentClass + ':' + pseudo;
                        }
                        else if (xAxis === 'center')
                        {
                            transformedClasses.push(currentClass);
                        }

                        if (position === 'abs')
                        {
                            absClasses.push(currentClass);
                        }
                        else if (position === 'fix')
                        {
                            fixClasses.push(currentClass);
                        }

                        if (xAxis === 'left')
                        {
                            leftClasses.push(currentClass);
                        }
                        if (xAxis === 'center')
                        {
                            centerClasses.push(currentClass);
                        }
                        if (xAxis === 'right')
                        {
                            rightClasses.push(currentClass);

                            if (is__inanimate)
                            {
                                rightAnimateClasses.push(currentInanimateClass);
                            }
                        }
                    }
                });
            });

            yAxes.forEach(function (yAxis)
            {
                pseudos.forEach(function (pseudo)
                {
                    is__inanimate = (yAxis === 'bottom');

                    if (position !== 'fix' || !pseudo)
                    {
                        currentClass = position + '-' + yAxis;

                        if (pseudo)
        				{
        					currentClass = currentClass + '-' + pseudo;
        				}

        				if (is__inanimate)
                        {
                            currentInanimateClass = currentClass + '.absalign-animate';

                            if (pseudo)
                            {
                                currentInanimateClass = currentInanimateClass + '-' + pseudo + ':' + pseudo;
                            }
                        }

                        if (pseudo)
                        {
                            currentClass = currentClass + ':' + pseudo;
                        }
                        else if (yAxis === 'middle')
                        {
                            transformedClasses.push(currentClass);
                        }

                        if (position === 'abs')
                        {
                            absClasses.push(currentClass);
                        }
                        else if (position === 'fix')
                        {
                            fixClasses.push(currentClass);
                        }

                        if (yAxis === 'top')
                        {
                            topClasses.push(currentClass);
                        }
                        if (yAxis === 'middle')
                        {
                            middleClasses.push(currentClass);
                        }
                        if (yAxis === 'bottom')
                        {
                            bottomClasses.push(currentClass);

                            if (is__inanimate)
                            {
                                bottomAnimateClasses.push(currentInanimateClass);
                            }
                        }
                    }
                });
            });
        });

    // Formatting the output
        var output = "";

        output += "_classesCollection =\n";
        output += "[\n";

        transformedClasses.forEach(function (className, i)
        {
            output += '\t"' + className + '"';

            if (i < transformedClasses.length - 1)
            {
                output += ',';
            }

            output += "\n";
        });

        output += "];";

    // Outputting in the _class-collection.js file
        grunt.file.write(
            'src/_class-collection.js',
            output
        );
    });

// buildAll: build package and demo
    grunt.registerTask('buildAll',
    [
        'clean',
        'sass:dist',
        'css_important:dist',
        'postcss:dist',
        'generateAbsalignClasses',
        'include_file:dist',
        'replace:dist',
		'csscomb:dist',
        'concurrent:minPackage',
        'copy:demo_tmp',
        'concat:demo',
        'clean:demo_concat',
        'postcss:demo',
        'processhtml',
        'replace:demo',
        'concurrent:minDemo',
        'copy:demo_dist'
    ]);

// buildPackage: build only package
    grunt.registerTask('buildPackage',
    [
        'clean:dist',
		'sass:dist',
        'css_important:dist',
        'postcss:dist',
        'generateAbsalignClasses',
        'include_file:dist',
		'replace:dist',
		'csscomb:dist',
		'concurrent:minPackage'
    ]);

// buildDemo: build only demo
    grunt.registerTask('buildDemo',
    [
        'clean:demo',
        'copy:demo_tmp',
		'concat:demo',
		'clean:demo_concat',
		'postcss:demo',
		'processhtml:demo',
		'replace:demo',
		'concurrent:minDemo',
		'copy:demo_dist'
    ]);
};
