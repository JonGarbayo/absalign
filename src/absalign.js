/*!
 * @@name v@@version (JS part)
 * Author: @@author
 * Repo: @@homepage
 * Licensed under MIT (@@homepage/blob/master/LICENSE)
 */

if (canUseTransform() === false)
{
	var absalignPolyfill = new AbsalignPolyfill().init();
}

function canUseTransform()
{
    var prefixes =
	[
		'transform',
		'WebkitTransform',
		'MozTransform',
		'OTransform',
		'msTransform'
	];

	var prefixes_length = prefixes.length;

    for (var i = 0; i < prefixes_length; i++)
	{
        if (document.createElement('div').style[prefixes[i]] !== undefined)
		{
            return prefixes[i];
        }
    }

    return false;
}

function AbsalignPolyfill()
{
    var OBJ = this;

    var _classesCollection = [],
        _elements = [];

    _populateClassCollection();

    OBJ.init = function ()
    {
        _scan();

        return OBJ;
    };

    function _populateClassCollection()
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
                            currentClass = '.' + position + '-' + xAxis + '-' + yAxis;

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
                        currentClass = '.' + position + '-' + xAxis;

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
                        currentClass = '.' + position + '-' + yAxis;

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

        _classesCollection = transformedClasses;
    }

    function _scan()
    {
        _classesCollection.forEach(function (className)
        {
            var elements = document.querySelectorAll(className);

            for (var i = 0; i < elements.length; i++)
            {
                _elements.push(new AbsalignElement(elements[i], className).init());
            }
        });
    }

    return OBJ;
}

function AbsalignElement(element, absalignClass)
{
    var OBJ = this;

    var _element = element,
        _xAxis,
        _yAxis;

    absalignClass = absalignClass.split('-');

    var nbAxes = absalignClass.length - 1;

    if (nbAxes === 1)
    {
        if (absalignUtilities().isXAxis(absalignClass[1]))
        {
            _xAxis = absalignClass[1];
        }

        if (absalignUtilities().isYAxis(absalignClass[1]))
        {
            _yAxis = absalignClass[1];
        }
    }

    if (nbAxes === 2)
    {
        _xAxis = absalignClass[1];
        _yAxis = absalignClass[2];
    }

    OBJ.init = function ()
    {
        _place();

        return OBJ;
    };

    function _place()
    {
        if (_xAxis === 'center')
        {
            var elementWidth = _getWidth();

            _element.style.marginLeft = -(elementWidth / 2) + 'px';
        }

        if (_yAxis === 'middle')
        {
            var elementHeight = _getHeight();

            _element.style.marginTop = -(elementHeight / 2) + 'px';
        }
    }

    function _getWidth()
    {
        return _element.offsetWidth;
    }

    function _getHeight()
    {
        return _element.offsetHeight;
    }

    return OBJ;
}

function absalignUtilities()
{
    var OBJ = OBJ || { };

    var _xAxes = ['left', 'center', 'right'];
    var _yAxes = ['top', 'middle', 'bottom'];

    OBJ.isXAxis = function (axis)
    {
        return (_xAxes.indexOf(axis) !== -1);
    };

    OBJ.isYAxis = function (axis)
    {
        return (_yAxes.indexOf(axis) !== -1);
    };

    return OBJ;
}
