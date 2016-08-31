define(['pages/common/header/header',
        'pages/index/indexController',],
    function (headerView,
              indexController) {
        'use strict';

        var headerController={};


        headerController.init = function () {
            //here we should create the view
            this.createView();
        };

        headerController.createView = function () {
            this.headerView = new headerView({
                goHome:headerController.goHome
            });
        };
        headerController.goHome = function(){
            indexController.init();
        };
        headerController.removeView=function(){
            $('#headerID').remove();
        };
        return headerController;
    });