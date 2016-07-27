(function ($)
{
	$(document).ready(function ()
	{
		var $demo_block_container = $('.demo-block-container');
		var $demo_block = $('.demo-block');

		var element_controls        = {};
		var pseudo_element_controls = {};

		element_controls.$select_prefix = $('#element-prefix-class-selector');
		element_controls.$select_suffix = $('#element-suffix-class-selector');

		pseudo_element_controls.$select_prefix = $('#pseudo-element-prefix-class-selector');
		pseudo_element_controls.$select_suffix = $('#pseudo-element-suffix-class-selector');
		pseudo_element_controls.$select_pseudo = $('#pseudo-element-pseudo-class-selector');

		element_controls.$select_prefix.on('change', onSelectsClassChange);
		element_controls.$select_suffix.on('change', onSelectsClassChange);
		pseudo_element_controls.$select_prefix.on('change', onSelectsClassChange);
		pseudo_element_controls.$select_suffix.on('change', onSelectsClassChange);
		pseudo_element_controls.$select_pseudo.on('change', onSelectsClassChange);

		function onSelectsClassChange()
		{
			$demo_block.attr('class', 'demo-block ' +
			element_controls.$select_prefix.getSelectedValue() + '-' +
			element_controls.$select_suffix.getSelectedValue() + ' ' +
			pseudo_element_controls.$select_prefix.getSelectedValue() + '-' +
			pseudo_element_controls.$select_suffix.getSelectedValue() + '-' +
			pseudo_element_controls.$select_pseudo.getSelectedValue());
		}
	});

	$.fn.extend(
	{
		getSelectedValue: function ()
		{
			return $('> option:selected', this).val();
		}
	});
})(jQuery);
