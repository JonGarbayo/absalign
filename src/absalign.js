/*!
 * @@name v@@version (JS part)
 * Author: @@author
 * Repo: @@homepage
 * Licensed under MIT (@@homepage/blob/master/LICENSE)
 */

if (absalignUtilities().canUseTransform() === false)
{
	var absalignPolyfill = new AbsalignPolyfill().init();
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
        /* include _class-collection.js */
    }

    function _scan()
    {
        for (var i = 0; i < _classesCollection.length; i++)
        {
            var className = _classesCollection[i];

            var elements = document.querySelectorAll(className);

            for (var j = 0; j < elements.length; j++)
            {
                _elements.push(new AbsalignElement(elements[j], className).init());
            }
        }
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

    OBJ.canUseTransform = function ()
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
    };

    return OBJ;
}
