define(['pages/index/indexView',
        'pages/global/NewYork/newYorkController'
    ],
    function (indexView,
              newYorkController) {
        'use strict';

        var indexController={};


        indexController.init = function () {
            //here we should create the view
            this.createView();
        };

        indexController.createView = function () {
            this.indexView = new indexView({
                clickPopup:indexController.clickPopup
            });
        };
        indexController.clickPopup = function (e) {
            switch(e){
                case 'bigApple':
                    newYorkController.init();
                    break;

            }
            indexController.removeView();
        };
        indexController.removeView=function(){
            $('#bigApple').off('click');
            $('#mainArea').empty();
        };
        return indexController;
    });