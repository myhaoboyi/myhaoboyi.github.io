define([
    'jquery.plugins',
        ], function (
    $
    ) {

    'use strict';

    return $.widget('header', {

        _create: function () {
            this._super();
            this.renderLayout();

        },

        renderLayout: function () {
            var context = this;
            //var strHtml = HBS['pages/common/header/header']({});
            $.ajax({
                url: 'pages/common/header/header.hbs',
                dataType: "html"
            }).done(function( responseHtml ) {
                $('#header').html(responseHtml);
                context.bindListeners();
            });
        },

        bindListeners: function () {
            var context = this;
            $('#goBackToHomePage').click(function(){
                context.options.goHome();
            });

        },

        unbindListeners: function () {

        },

        _destroy: function () {
            this.unbindListeners();
            $('.header').remove();
            this._super();
        },
    });
});
