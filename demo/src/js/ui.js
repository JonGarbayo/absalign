(function ($)
{
	$(document).ready(function ()
	{
		var $showZone = $('.js-show-zone');

		$(window).on('resize', function ()
		{
			$showZone.height($showZone.width() + 'px');
		}).trigger('resize');

		$('select').selectize(
		{
			onInitialize: function ()
			{
				this.$control_input.attr('readonly', true);
			}
		});
	});
})(jQuery);
