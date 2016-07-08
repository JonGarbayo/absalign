/*!
 * absalign v0.0.4b (JS part)
 * Author: Jon Garbayo <jon.garbayo@gmail.com>
 * Repo: https://github.com/JonGarbayo/absalign
 * Licensed under MIT (https://github.com/JonGarbayo/absalign/blob/master/LICENSE)
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
