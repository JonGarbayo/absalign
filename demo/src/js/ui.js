(function ($)
{
	$(document).ready(function ()
	{
		var $demo_block_container = $('.demo-block-container');

		$(window).on('resize', function ()
		{
			$demo_block_container.height($demo_block_container.width() + 'px');
		}).trigger('resize');
	});
})(jQuery);
