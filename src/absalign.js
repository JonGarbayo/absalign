/*!
 * @@name v@@version (JS part)
 * Author: @@author
 * Repo: @@homepage
 * Licensed under MIT (@@homepage/blob/master/LICENSE)
 */

/* include _polyfills.js */

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

    _populateClassesCollection();

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
     * Returns the absalign classes collection.
     * @return {Array} absalign classes collection as array of strings.
     */
    OBJ.get__classesCollection = function ()
    {
        return _classesCollection;
    };

    /**
     * Add the generated absalign classes from Grunt to the
     * AbsalignPolyfill.
     */
    function _populateClassesCollection()
    {
        /* include _class-collection.js */
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
                _elements.push(new AbsalignElement(elements[j], className, OBJ).init());
            }
        }
    }

    return OBJ;
}

/**
 * Wraper object for every DOM element with an absalign class.
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
     * After instatiation, launch DOM operations.
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
    }

    function _fetch__absalignClassFromClass()
    {
        var elementClass  = _element.className,

            classes      = elementClass.split(' '),
            classes__it  = 0,
            classes__len = classes.length,

            absalignClassesCollection = absalignPolyfill.get__classesCollection();

            absalignClass = false;

        while (absalignClass === false && classes__it < classes__len)
        {
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

        if (_yAxis === 'middle')
        {
            var elementHeight = _get__height();

            _element.style.marginTop = -(elementHeight / 2) + 'px';
        }
    }

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
