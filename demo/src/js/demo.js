function Demo()
{
    this._$showSubject = jQuery('.js-show-subject');
    this._controls =
    {
        'subject':
        {
            '$prefix': jQuery('.js-subject-class-prefix-selector'),
            '$suffix': jQuery('.js-subject-class-suffix-selector')
        },
        'pseudo':
        {
            '$prefix': jQuery('.js-pseudo-subject-class-prefix-selector'),
            '$suffix': jQuery('.js-pseudo-subject-class-suffix-selector'),
            '$pseudo': jQuery('.js-pseudo-subject-pseudo-class-selector')
        }
    };
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
        this._$showSubject.attr('class', this._$showSubject.data('base-class') + ' ' +
        this._controls.subject.$prefix.getSelectedValue() + '-' +
        this._controls.subject.$suffix.getSelectedValue() + ' ' +
        this._controls.pseudo.$prefix.getSelectedValue() + '-' +
        this._controls.pseudo.$suffix.getSelectedValue() + '-' +
        this._controls.pseudo.$pseudo.getSelectedValue());
    }
};
