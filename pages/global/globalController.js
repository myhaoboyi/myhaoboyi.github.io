define(['pages/index/indexController',
        'pages/common/header/headerController',],
    function (indexController,
              headerController) {
        'use strict';

        var globalController={};


        globalController.init = function () {
                globalController.loadView('header');
                globalController.loadView('indexView');
              //  globalController.loadView('footer');

        };
        globalController.loadView = function(view){
                switch(view){
                    case 'header':
                        headerController.init();
                        break;
                    case 'indexView':
                        indexController.init();
                        break;
                }
        };
        return globalController;
    });