function Demo()
{
	var $testBlockControls       = jQuery('.js-test-block-controls');
	var $pseudoTestBlockControls = jQuery('.js-pseudo-test-block-controls');

    this._$testBlock = jQuery('.js-test-block');
    this._controls =
    {
        'testBlock':
        {
            '$prefix': $testBlockControls.find('.js-prefix-selector'),
            '$suffix': $testBlockControls.find('.js-suffix-selector'),
			'$animate': $testBlockControls.find('.js-animate-checkbox')
        },
        'pseudoTestBlock':
        {
            '$suffix': $pseudoTestBlockControls.find('.js-suffix-selector'),
            '$pseudo': $pseudoTestBlockControls.find('.js-pseudo-selector'),
            '$animate': $pseudoTestBlockControls.find('.js-animate-checkbox')
        }
    };

    console.log(this._controls);
}

Demo.prototype =
{
    'constructor': Demo,

    init: function()
    {
        var demo = this;

        jQuery.each([this._controls.testBlock, this._controls.pseudoTestBlock], function()
        {
            jQuery.each(this, function()
            {
                this.on('change', function()
                {
                    demo.updateTestBlockClass();
                });
            });
        });
    },

    updateTestBlockClass: function()
    {
        var newClass = this._$testBlock.data('base-class') + ' ' +
        this._controls.testBlock.$prefix.getSelectedValue() + '-' +
        this._controls.testBlock.$suffix.getSelectedValue() +
        (this._controls.testBlock.$animate.isChecked() === true ? ' absalign-animate' : '') + ' ' +
        'abs-' +
        this._controls.pseudoTestBlock.$suffix.getSelectedValue() + '-' +
        this._controls.pseudoTestBlock.$pseudo.getSelectedValue() +
		(this._controls.pseudoTestBlock.$animate.isChecked() === true ? ' absalign-animate-' + this._controls.pseudoTestBlock.$pseudo.getSelectedValue() : '');

        this._$testBlock.attr('class', newClass);
    }
};
