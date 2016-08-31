define([
    'jquery.plugins',

], function ($
) {

    'use strict';

    return $.widget('header', {

        _create: function () {
            this._super();
            this.renderLayout();
            this.bindListeners();
        },

        renderLayout: function () {
            var context = this;
            $.ajax({
                url: 'pages/global/NewYork/newYork.html',
                dataType: "html"
            }).done(function( responseHtml ) {
                    $('#mainArea').html(responseHtml);})
        },
        bindListeners: function () {
            var context = this;
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
