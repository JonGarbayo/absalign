(function ($)
{
	$(document).ready(function ()
	{
		var demo = new Demo();
		demo.init();
	});

	$.fn.extend(
	{
		getSelectedValue: function ()
		{
			return $('> option:selected', this).val();
		}
	});
})(jQuery);
