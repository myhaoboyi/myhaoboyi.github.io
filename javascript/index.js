$(document).ready(function() {
  var wechat='http://farm2.staticflickr.com/1481/24761244169_29f9f4019b_b.jpg';
  $(".2015").click(function (e) {
     e.preventDefault();
  	window.open("http://www.cnn.com", "_self");
  });
  $(".titleImage").click(function (e) {
     e.preventDefault();
  	window.open("http://lovemecynthia.com", "_self");
  });
  $('.fa-weixin').click(function(e){
  	$('.fa-weixin').w2popup({
     //url: 'http://farm2.staticflickr.com/1481/24761244169_29f9f4019b_b.jpg',
      title : 'WECHAT 扫一扫',
      style           : 'background-image:url('+wechat+');background-size: 100% 100%;',      // additional styles
      width           : 300,     // width in px
      height          : 500,     // height in px
    color           : '#000',  // background-color for the screen lock div
    opacity         : 0.4,     // opacity for the screen lock div
    speed           : 0.6,     // popup speed (in seconds)
    showClose       : true,    // close button indicator
    })
  	//options: {
    //title           : 'WECHAT 扫一扫',      // title html of the popup
    //modal           : false,   // indicates if modal
    //width           : 300,     // width in px
    //height          : 500,     // height in px
    //url             : 'image/wechat.jpg',    // url to load content from (see load method)
    //style           : '',      // additional styles
    //color           : '#000',  // background-color for the screen lock div
    //opacity         : 0.4,     // opacity for the screen lock div
    //speed           : 0.6,     // popup speed (in seconds)
    //showClose       : true,    // close button indicator
    //
		//};

  });

});