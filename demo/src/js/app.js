(function ($)
{
	$(document).ready(function ()
	{
		var $showSubject = $('.js-show-subject');

		var element_controls        = {};
		var pseudo_element_controls = {};

		element_controls.$select_prefix = $('.js-subject-class-prefix-selector');
		element_controls.$select_suffix = $('.js-subject-class-suffix-selector');

		pseudo_element_controls.$select_prefix = $('.js-pseudo-subject-class-prefix-selector');
		pseudo_element_controls.$select_suffix = $('.js-pseudo-subject-class-suffix-selector');
		pseudo_element_controls.$select_pseudo = $('.js-pseudo-subject-pseudo-class-selector');

		element_controls.$select_prefix.on('change', onSelectsClassChange);
		element_controls.$select_suffix.on('change', onSelectsClassChange);
		pseudo_element_controls.$select_prefix.on('change', onSelectsClassChange);
		pseudo_element_controls.$select_suffix.on('change', onSelectsClassChange);
		pseudo_element_controls.$select_pseudo.on('change', onSelectsClassChange);

		function onSelectsClassChange()
		{
			$showSubject.attr('class', 'c-app-show-zone__subject js-show-subject ' +
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
