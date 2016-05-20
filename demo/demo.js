window.onload = function ()
{
	var demo_block = document.getElementsByClassName('demo-block')[0];

	var element_controls        = {};
	var pseudo_element_controls = {};

	element_controls.select_prefix = document.getElementById('element-prefix-class-selector');
	element_controls.select_suffix = document.getElementById('element-suffix-class-selector');

	pseudo_element_controls.select_prefix = document.getElementById('pseudo-element-prefix-class-selector');
	pseudo_element_controls.select_suffix = document.getElementById('pseudo-element-suffix-class-selector');
	pseudo_element_controls.select_pseudo = document.getElementById('pseudo-element-pseudo-class-selector');

	element_controls.select_prefix.addEventListener('change', onSelectsClassChange);
	element_controls.select_suffix.addEventListener('change', onSelectsClassChange);
	pseudo_element_controls.select_prefix.addEventListener('change', onSelectsClassChange);
	pseudo_element_controls.select_suffix.addEventListener('change', onSelectsClassChange);
	pseudo_element_controls.select_pseudo.addEventListener('change', onSelectsClassChange);


	function onSelectsClassChange()
	{
		window.requestAnimationFrame(onSelectsClassChange);

		demo_block.className = 'demo-block ' +
		element_controls.select_prefix.getSelectedValue() + '-' +
		element_controls.select_suffix.getSelectedValue() + ' ' +
		pseudo_element_controls.select_prefix.getSelectedValue() + '-' +
		pseudo_element_controls.select_suffix.getSelectedValue() + '-' +
		pseudo_element_controls.select_pseudo.getSelectedValue();
	}
};

HTMLSelectElement.prototype.getSelectedValue = function ()
{
	return this.options[this.selectedIndex].value;
};

if (!window.requestAnimationFrame)
{
	window.requestAnimationFrame = function ()
	{
		return window.webkitRequestAnimationFrame ||
			window.mozRequestAnimationFrame ||
			window.oRequestAnimationFrame ||
			window.msRequestAnimationFrame;
	};
}
