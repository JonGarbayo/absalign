window.onload = function ()
{
	var select_prefix = document.getElementById('prefix-class-selector');
	var select_suffix = document.getElementById('suffix-class-selector');
	var demo_block    = document.getElementsByClassName('demo-block')[0];

	select_prefix.addEventListener('change', onSelectsClassChange);
	select_suffix.addEventListener('change', onSelectsClassChange);

	function onSelectsClassChange()
	{
		demo_block.className = 'demo-block ' +
		select_prefix.getSelectedValue() + '-' +
		select_suffix.getSelectedValue();
	}
};

HTMLSelectElement.prototype.getSelectedValue = function ()
{
	return this.options[this.selectedIndex].value;
};
