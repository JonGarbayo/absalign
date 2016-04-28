/*!
 * @@name v@@version (JS part)
 * Author: @@author
 * Repo: @@homepage
 * Licensed under MIT (@@homepage/blob/master/LICENSE)
 */

if (canUseTransform() === false)
{
	// TODO : Code the JavaScript pollyfill
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
