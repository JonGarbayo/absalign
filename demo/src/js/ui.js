(function ($)
{
	$(document).ready(function ()
	{
		var $showZone = $('.js-test-area');

		$(window).on('resize', function ()
		{
			$showZone.height($showZone.width() + 'px');
		}).trigger('resize');

		$('select').selectize(
		{
			'copyClassesToDropdown': false,

			onInitialize: function ()
			{
				this.$control_input.attr('readonly', true);
			}
		});
	});
})(jQuery);
