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
