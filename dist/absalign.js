/*!
 * absalign v0.1.0 (JS part)
 * Author: Jon Garbayo <jon.garbayo@gmail.com>
 * Repo: https://github.com/JonGarbayo/absalign
 * Licensed under MIT (https://github.com/JonGarbayo/absalign/blob/master/LICENSE)
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


/**
 * Core of the polyfill. Scans the DOM to build the AbsalignElements
 * list.
 * @constructor
 */
function AbsalignPolyfill()
{
    var OBJ = this;

    var _classesCollection = [],
        _elements = [];

    _populateClassCollection();

    /**
     * After instatiation, launch DOM operations.
     * @return {AbsalignPolyfill} AbsalignPolyfill after scanning the DOM.
     */
    OBJ.init = function ()
    {
        _scan();

        return OBJ;
    };

    /**
     * Add the generated absalign classes from Grunt to the
     * AbsalignPolyfill.
     */
    function _populateClassCollection()
    {
        _classesCollection =
[
	"abs-left-middle",
	"abs-center-top",
	"abs-center-middle",
	"abs-center-bottom",
	"abs-right-middle",
	"fix-left-middle",
	"fix-center-top",
	"fix-center-middle",
	"fix-center-bottom",
	"fix-right-middle",
	"abs-center",
	"abs-middle",
	"fix-center",
	"fix-middle"
];
    }

    /**
     * Scans the DOM using the absalign classes collection. A new
     * AbsalignElement object is instantiated for each element found, and
     * stored in the _elements collection.
     */
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

/**
 * Wraper object for every DOM element with an absalign class.
 * @param       {Object} element       DOM element.
 * @param       {String} absalignClass absalign class found on element
 *                                     to process.
 * @constructor
 */
function AbsalignElement(element, absalignClass)
{
    var OBJ = this;

    var _element = element,
        _xAxis,
        _yAxis;

    absalignClass = absalignClass.split('-');

    var nbAxes = absalignClass.length - 1;

// Mono axis case (i.e.: abs-left)
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

// Double axis case (i.e.: abs-center-right)
    if (nbAxes === 2)
    {
        _xAxis = absalignClass[1];
        _yAxis = absalignClass[2];
    }

    /**
     * After instatiation, launch DOM operations.
     * @return {AbsalignElement} AbsalignElement after placing it.
     */
    OBJ.init = function ()
    {
        _place();

        return OBJ;
    };

    /**
     * Main action of the polyfill: replace the transform() CSS function.
     * The effect only applies to element with "center" as X axis or "middle" as
     * Y axis.
     * The idea is to put the half of the element width or height as negative
     * margin-left or margin-top.
     */
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

    /**
     * Get the element width.
     * @return {Number} The element width, as number.
     */
    function _getWidth()
    {
        return _element.offsetWidth;
    }

    /**
     * Get the element height.
     * @return {Number} The element height, as number.
     */
    function _getHeight()
    {
        return _element.offsetHeight;
    }

    return OBJ;
}

/**
 * Utilities factory function.
 * @return {Object} An absalignUtilities instance.
 */
function absalignUtilities()
{
    var OBJ = OBJ || { };

    var _xPositions = ['left', 'center', 'right'];
    var _yPositions = ['top', 'middle', 'bottom'];

    /**
     * From a position name, tell if it's from X axis or not.
     * @param  {String} position The position name.
     * @return {Boolean}         True if position is from the X axis, else
     *                           false.
     */
    OBJ.isXAxis = function (position)
    {
        return (_xPositions.indexOf(position) !== -1);
    };

    /**
     * From a position name, tell if it's from Y axis or not.
     * @param  {String} position The position name.
     * @return {Boolean}         True if position is from the Y axis, else
     *                           false.
     */
    OBJ.isYAxis = function (position)
    {
        return (_yPositions.indexOf(position) !== -1);
    };

    /**
     * Tell if the browser knows the transform CSS property.
     * @return {Boolean} True if if the browser knows the transform CSS
     *                   property, else false.
     */
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

// Starting the polyfill
if (absalignUtilities().canUseTransform() === false)
{
	var absalignPolyfill = new AbsalignPolyfill().init();
}
