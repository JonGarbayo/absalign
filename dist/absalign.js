/*!
 * absalign v0.2.1 (JS part)
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
 * Core of the polyfill. Scans the DOM to build the AbsalignElements list.
 * @constructor
 */
function AbsalignPolyfill()
{
    var OBJ = this;

    var _classesCollection = [],
        _elements = [];

    _populateClassesCollection();

    /**
     * After instantiation, launch DOM operations.
     * @return {AbsalignPolyfill} AbsalignPolyfill after scanning the DOM.
     */
    OBJ.init = function ()
    {
        _scan();

        return OBJ;
    };

    /**
     * Returns the absalign classes collection.
     * @return {Array} absalign classes collection as array of strings.
     */
    OBJ.get__classesCollection = function ()
    {
        return _classesCollection;
    };

    /**
     * Add the generated absalign classes from Grunt to the AbsalignPolyfill.
     */
    function _populateClassesCollection()
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
     * AbsalignElement object is instantiated for each element found, and stored
     * in the _elements collection.
     */
    function _scan()
    {
        for (var i = 0; i < _classesCollection.length; i++)
        {
            var className = _classesCollection[i],
                elements  = document.getElementsByClassName(className);

            for (var j = 0; j < elements.length; j++)
            {
                _elements.push(
                    new AbsalignElement(elements[j], className, OBJ).init()
                );
            }
        }
    }

    return OBJ;
}

/**
 * Wrapper object for every DOM element with an absalign class.
 * @param {Object} element       DOM element.
 * @param {String} absalignClass absalign class found on element to process.
 *
 * @constructor
 */
function AbsalignElement(element, absalignClass, absalignPolyfill)
{
    var OBJ = this;

    var _element       = element,
        _absalignClass = absalignClass,
        _xAxis,
        _yAxis;

    _populate__axesFromAbsalignClass(_absalignClass);

    /**
     * After instantiation, launch DOM operations.
     * @return {AbsalignElement} AbsalignElement after placing it.
     */
    OBJ.init = function ()
    {
        _place();

        _on__classChange();

        return OBJ;
    };

    /**
     * Extract axes from the provided absalign class and populate _xAxis and
     * _yAxis with it.
     * @param {String} absalignClass absalign class of the element.
     */
    function _populate__axesFromAbsalignClass(absalignClass)
    {
        absalignClass = absalignClass.split('-');

        var nbAxes = absalignClass.length - 1;

        switch (nbAxes)
        {
        // No absalign class case (can happen only after class change)
            case 0:
                _xAxis = '';
                _yAxis = '';
                break;

        // Mono axis case (i.e.: abs-left)
            case 1:
                if (absalignUtilities().is__XAxis(absalignClass[1]))
                {
                    _xAxis = absalignClass[1];
                    _yAxis = '';
                }

                if (absalignUtilities().is__YAxis(absalignClass[1]))
                {
                    _xAxis = '';
                    _yAxis = absalignClass[1];
                }

                break;

        // Double axis case (i.e.: abs-center-right)
            case 2:
                _xAxis = absalignClass[1];
                _yAxis = absalignClass[2];
                break;
        }
    }

    /**
     * Extract the element absalign class from its class list.
     * @return {String} The extracted class. Can be empty if absalign class has
     *                  been removed.
     */
    function _fetch__absalignClassFromClass()
    {
        var classes      = _element.className.split(' '),
            classes__it  = 0,
            classes__len = classes.length,

            absalignClassesCollection = absalignPolyfill.get__classesCollection();

            absalignClass = '';

    // Looping through element classes
        while (absalignClass === '' && classes__it < classes__len)
        {
        // If current class is an absalign class, storing it
            if (absalignClassesCollection.indexOf(classes[classes__it]) !== -1)
            {
                absalignClass = classes[classes__it];
            }

            classes__it++;
        }

        return absalignClass;
    }

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
            var elementWidth = _get__width();

            _element.style.marginLeft = -(elementWidth / 2) + 'px';
        }
        else
        {
            _element.style.marginLeft = '';
        }

        if (_yAxis === 'middle')
        {
            var elementHeight = _get__height();

            _element.style.marginTop = -(elementHeight / 2) + 'px';
        }
        else
        {
            _element.style.marginTop = '';
        }
    }

    /**
     * When the element class changes, update the element properties, and place
     * it again.
     * This behavior is powered by a custom function to detect class changes, as
     * this event doesn't exist natively.
     */
    function _on__classChange()
    {
        var newAbsalignClass           = _fetch__absalignClassFromClass(),
            is__absalignClassDifferent = (_absalignClass !== newAbsalignClass);

        if (is__absalignClassDifferent)
        {
            _absalignClass = newAbsalignClass;

            _populate__axesFromAbsalignClass(_absalignClass);
            _place();
        }

        setTimeout(_on__classChange, 100);
    }

    /**
     * Get the element width.
     * @return {Number} The element width, as number.
     */
    function _get__width()
    {
        return _element.offsetWidth;
    }

    /**
     * Get the element height.
     * @return {Number} The element height, as number.
     */
    function _get__height()
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

    var _xPositions = ['left', 'center', 'right'],
        _yPositions = ['top', 'middle', 'bottom'];

    /**
     * From a position name, tell if it's from X axis or not.
     * @param  {String} position The position name.
     * @return {Boolean}         True if position is from the X axis, else
     *                           false.
     */
    OBJ.is__XAxis = function (position)
    {
        return (_xPositions.indexOf(position) !== -1);
    };

    /**
     * From a position name, tell if it's from Y axis or not.
     * @param  {String} position The position name.
     * @return {Boolean}         True if position is from the Y axis, else
     *                           false.
     */
    OBJ.is__YAxis = function (position)
    {
        return (_yPositions.indexOf(position) !== -1);
    };

    /**
     * Tell if the browser supports the transform CSS property.
     * @return {Boolean} True if the browser supports the transform CSS
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
	new AbsalignPolyfill().init();
}
