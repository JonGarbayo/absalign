function Demo()
{
    this._$showSubject = jQuery('.js-show-subject');
    this._controls =
    {
        'subject':
        {
            '$prefix': jQuery('.js-subject-class-prefix-selector'),
            '$suffix': jQuery('.js-subject-class-suffix-selector'),
			'$strict': jQuery('.js-subject-class-strict-checkbox')
        },
        'pseudo':
        {
            '$suffix': jQuery('.js-pseudo-subject-class-suffix-selector'),
            '$strict': jQuery('.js-pseudo-subject-class-strict-checkbox'),
            '$pseudo': jQuery('.js-pseudo-subject-pseudo-class-selector')
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

        jQuery.each([this._controls.subject, this._controls.pseudo], function()
        {
            jQuery.each(this, function()
            {
                this.on('change', function()
                {
                    demo.updateShowSubjectClass();
                });
            });
        });
    },

    updateShowSubjectClass: function()
    {
        var newClass = this._$showSubject.data('base-class') + ' ' +
        this._controls.subject.$prefix.getSelectedValue() + '-' +
        this._controls.subject.$suffix.getSelectedValue() +
        (this._controls.subject.$strict.isChecked() === true ? '-strict' : '') + ' ' +
        'abs-' +
        this._controls.pseudo.$suffix.getSelectedValue() + '-' +
        (this._controls.pseudo.$strict.isChecked() === true ? 'strict-' : '') +
        this._controls.pseudo.$pseudo.getSelectedValue();

        this._$showSubject.attr('class', newClass);
    }
};
