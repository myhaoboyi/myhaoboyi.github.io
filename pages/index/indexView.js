define([
    'jquery.plugins',
    'vendor/leaflet/leaflet-src'
], function ($,L
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
            $(window).resize(function(){
                $('#mapid ').height($(window).height()-50);
            });
            //var strHtml = HBS['pages/common/header/header']({});
            $.ajax({
                url: 'pages/index/maps.html',
                dataType: "html"
            }).done(function( responseHtml ) {
                $('#mainArea').html(responseHtml);

               $('#mapid ').height($(window).height()-50);
                var mymap = L.map('mapid').setView([39.82, -98.58], 5);

                L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpandmbXliNDBjZWd2M2x6bDk3c2ZtOTkifQ._QA7i5Mpkd_m30IGElHziw', {
                    maxZoom: 18,
                    attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, ' +
                    '<a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
                    'Imagery © <a href="http://mapbox.com">Mapbox</a>',
                    id: 'mapbox.streets'
                }).addTo(mymap);


                L.circle([51.508, -0.11], 500, {
                    color: 'red',
                    fillColor: '#f03',
                    fillOpacity: 0.5
                }).addTo(mymap).bindPopup("I am a circle.");




                var popup = L.popup();

                // function onMapClick(e) {
                //     popup
                //         .setLatLng(e.latlng)
                //         .setContent("You clicked the map at " + e.latlng.toString())
                //         .openOn(mymap);
                // }
                //
                // mymap.on('click', onMapClick);
                //
                context.setPoint(mymap,context);

            });
        },
        setPoint:function(mymap,context){
            var bigApple = document.createElement('a');
            bigApple.id='bigApple';
            bigApple.innerHTML = "This is Big Apple";
            bigApple.onclick = function() {
                context.options.clickPopup(bigApple.id);
                // do whatever else you want to do - open accordion etc
            };
            L.marker([40.73243, -73.99326]).addTo(mymap)
                .bindPopup(bigApple).openPopup();

            var DC = document.createElement('h1');
            DC.id='DC';
            DC.innerHTML = "We Live In D.C";
            DC.onclick = function() {
                context.options.clickPopup(DC.id);
                // do whatever else you want to do - open accordion etc
            };
            L.marker([38.85749, -77.39739]).addTo(mymap)
                .bindPopup(DC).openPopup();
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
