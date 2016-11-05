(function ($)
{
	$(document).ready(function ()
	{
		var demo = new Demo().init();
	});

	$.fn.extend(
	{
		getSelectedValue: function ()
		{
			return $('> option:selected', this).val();
		}
	});
})(jQuery);
