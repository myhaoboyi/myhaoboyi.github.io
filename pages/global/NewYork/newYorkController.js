define(['pages/global/NewYork/newYork',
    ],
    function (newYorkView) {
        'use strict';

        var newYorkViewController={};


        newYorkViewController.init = function () {
            //here we should create the view
            this.createView();
        };

        newYorkViewController.createView = function () {
            this.newYorkView = new newYorkView({

            });
        };
        newYorkViewController.clickPopup = function (e) {
            newYorkViewController.removeView();
        };
        newYorkViewController.removeView=function(){
            $('#mainArea').empty();
        };
        return newYorkViewController;
    });