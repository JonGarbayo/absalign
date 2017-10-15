/*!
 * @@name v@@version (JS part)
 * Author: @@author
 * Repo: @@homepage
 * Licensed under MIT (@@homepage/blob/master/LICENSE)
 */

// document.getElementsByClassName polyfill
// https://gist.github.com/eikes/2299607
// https://gist.github.com/darthwade/82d89666dc4ece05be4f
if (!document.getElementsByClassName)
{
    var getElementsByClassName = function (search)
    {
        var d = this,
            elements, pattern, i, results = [];

        if (d.querySelectorAll) // IE8
        {
            return d.querySelectorAll("." + search);
        }

        if (d.evaluate) // IE6, IE7
        {
            pattern  = ".//*[contains(concat(' ', @class, ' '), ' " + search + " ')]";
            elements = d.evaluate(pattern, d, null, 0, null);

            while ((i = elements.iterateNext()))
            {
                 results.push(i);
            }
        }
        else
        {
            elements = d.getElementsByTagName("*");
            pattern  = new RegExp("(^|\\s)" + search + "(\\s|$)");

            for (i = 0; i < elements.length; i++)
            {
                if (pattern.test(elements[i].className))
                {
                     results.push(elements[i]);
                }
            }
        }

        return results;
    };

    if (typeof Element !== 'undefined')
    {
        Element.prototype.getElementsByClassName = getElementsByClassName;
    }

    document.getElementsByClassName = getElementsByClassName;
}

// Array.protoye.indexOf polyfill
// https://github.com/Financial-Times/polyfill-service/tree/master/polyfills/Array/prototype/indexOf
if (!('indexOf' in Array.prototype))
{
    Array.prototype.indexOf = function indexOf(searchElement)
    {
        if (this === undefined || this === null)
        {
            throw new TypeError(this + ' is not an object');
        }

        var arraylike = this instanceof String ? this.split('') : this,
            length = Math.max(Math.min(arraylike.length, 9007199254740991), 0) || 0,
            index = Number(arguments[1]) || 0;

        index = (index < 0 ? Math.max(length + index, 0) : index) - 1;

        while (++index < length)
        {
            if (index in arraylike && arraylike[index] === searchElement)
            {
                return index;
            }
        }

        return -1;
    };
}

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

            var elements = document.getElementsByClassName(className);

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
