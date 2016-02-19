$(document).ready(function() {
	
	
  var wechat='http://farm2.staticflickr.com/1481/24761244169_29f9f4019b_b.jpg';
  $(".2015").click(function (e) {
     e.preventDefault();
  	 $(".2015").w2popup({title : '你点击了2015',
  	 					body:'     <p >2015 Coming Soon</p>',
                        style:   'padding-top:40px',
  	 					width           : 160,     // width in px
      					height          : 160, 
						opacity         : 0.4,     // opacity for the screen lock div
   						speed           : 0.6,     // popup speed (in seconds)
    					showClose       : true,  
  	});
  });
  $(".2015").click(function (e) {
     e.preventDefault();
  	 $(".2015").w2popup({title : '你点击了2015',
  	 					body:'     <p >2015 Coming Soon</p>',
                        style:   'padding-top:40px',
  	 					width           : 160,     // width in px
      					height          : 160, 
						opacity         : 0.4,     // opacity for the screen lock div
   						speed           : 0.6,     // popup speed (in seconds)
    					showClose       : true,  
  	});
  });
	$('.home').click(function(e){
		$(this).w2popup({
			title:'Travel Stories',
			body:' <p>Travel Stories from google photo</p>' +
			'<p>In Love on the road</p>',
			width           : 300,     // width in px
			height          : 300,
			opacity         : 0.8,
			speed           : 1,
			showClose       : true,
		})
	});
  $(".2014").click(function (e) {
     e.preventDefault();
  	 $(".2014").w2popup({title : '你点击了2014',
  	 					body:'     <p >2014 Coming Soon</p>',
                        style:   'padding-top:40px',
  	 					width           : 160,     // width in px
      					height          : 160, 
						opacity         : 0.4,     // opacity for the screen lock div
   						speed           : 0.6,     // popup speed (in seconds)
    					showClose       : true,  
  	});
  });
  $(".2016").click(function (e) {
     e.preventDefault();
  	 $(".2016").w2popup({title : '你点击了2016',
  	 					body:'     <p >2016 Coming Soon</p>',
                        style:   'padding-top:40px',
  	 					width           : 160,     // width in px
      					height          : 160, 
						opacity         : 0.4,     // opacity for the screen lock div
   						speed           : 0.6,     // popup speed (in seconds)
    					showClose       : true,  
  	});
  });
  $(".titleImage").click(function (e) {
     e.preventDefault();
  	window.open("http://myhaoboyi.github.io", "_self");
  });
  $('.donate').click(function(e){
  	$('.donateLink').toggle("slow");
  	$('.nodonate').toggle();
  	$('.donate').toggle();
  });
    $('.nodonate').click(function(e){
    	$('.donate').toggle();
    	$('.nodonate').toggle();
  		$('.donateLink').toggle("slow");
  	
  	
  });
  $('.fa-weixin').click(function(e){
  	$('.fa-weixin').w2popup({
     //url: 'http://farm2.staticflickr.com/1481/24761244169_29f9f4019b_b.jpg',
      title : 'WECHAT 扫一扫',
      style           : 'background-image:url('+wechat+');background-size: 100% 100%;backgroung-position：center;',      // additional styles
      width           : 350,     // width in px
      height          : 500,     // height in px
    color           : '#000',  // background-color for the screen lock div
    opacity         : 0.4,     // opacity for the screen lock div
    speed           : 0.6,     // popup speed (in seconds)
    showClose       : true,    // close button indicator
    })
 });

});