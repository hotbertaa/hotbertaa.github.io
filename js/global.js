/*$.fn.isInViewport = function() {
var elementTop = $(this).offset().top;
var elementBottom = elementTop + $(this).outerHeight();
var viewportTop = $(window).scrollTop();
var viewportBottom = viewportTop + $(window).height();
//return elementTop > viewportTop && elementTop < viewportBottom;
return elementTop > viewportTop;
};*/

$(function(){

	if($('#intro .fadeIn').visible(true)) {
    $('#intro ').addClass('onScreen');
	} else {
	}

var lastScrollTop = 0;
$(window).on('scroll',function(e){
   
   	$('section').each(function() {
   		var elementTop = $(this).offset().top;
			var viewportTop = $(window).scrollTop();
			if(viewportTop-200 >= elementTop){   		
     		$(this).removeClass('offscreen').addClass('onscreen');
    	} else {
    	}
  	});   
   
   $('.autohide').show();


      var _scroll = $(window).scrollTop();   
      //if (_scroll >= 1){
      if($(this).scrollTop() >= $('#wrap').offset().top){
        $('body').addClass("scrollx");
        $("#wrap").addClass("scrollr").removeClass('hashLink');
      } 
      if($(this).scrollTop() >= $('#wrap').offset().top +125){
        $('body').removeClass("scrollz").addClass("scrolly");
      }
      if($(this).scrollTop() >= $('#wrap').offset().top +400){
        $('body').removeClass("scrolly").addClass("scrollz");
      } 
      //else {
      if (_scroll >= 1){
      } else {
            $('body').removeClass("scrollx").removeClass("scrolly").removeClass("scrollz");
            $("#wrap").removeClass("scrollr");  
      }

    	
    	
		//element.addEventListener("scroll", function(){ 
    var st = $(window).scrollTop(); 
    if (st > lastScrollTop){
      $('body').removeClass("scrollup").addClass("scrolldown");
    } else if (st == 0){
    	$('body').removeClass("scrollup").removeClass("scrolldown");
    } else {
      $('body').removeClass("scrolldown").addClass("scrollup");
    }
    lastScrollTop = st;
		//}, false);
    
});


$('.scrollTo').on('click', function(){
    //$('html,body').animate({scrollTop: $($(this).attr('href')).offset().top},500);
    $('.scrollTo').removeClass('selected');
    $(this).addClass('selected');
    if($(this).parents('.window').length > 0 ){ 
        return true;
    } else {
    	if($($(this).attr('href')).length > 0){
        $('html,body').animate({scrollTop: $($(this).attr('href')).offset().top -80 }, 'slow');
        //$('html,body').animate({scrollTop: $($(this).attr('href')).offset().top -210 }, 'slow');
    	}else{
        	console.log($(this).attr('href')+ ' is missing');
    	}
        return false;
    }
});

$('.menuLink').on('click ', function() {
    //$('#menu').addClass('open');
    var perc;
  if($(window).width()<="500"){
    perc = "85%";
  } else if($(window).width()<="580"){
    perc = "75%";
  } else if($(window).width()<="780"){
    perc = "50%";
  } else {
    perc = "33%";
  }
  if($('body').hasClass('bootstrap')){
  	$('#menu .s, .slide-menu .overlay').fadeIn(250); 
  	$('#menu').addClass('open'); 
  } else {
  $('#menu').animate({'width': ''+perc+''},750,function(){
    $('#menu .s, .slide-menu .overlay').fadeIn(250); 
  	$('#menu').addClass('open');     
  });
  }
  return false;
});

$('#menu .close').on('click ', function() {
	$('#menu .s, .slide-menu .overlay').fadeOut(250); 
  $('#menu').removeClass('open'); 
	return false;
});


	$('section').each(function() {
   		var elementTop = $(this).offset().top;
			var viewportTop = $(window).scrollTop();
			if(viewportTop >= elementTop){   		
     		$(this).addClass('onscreen');
    	} else {
      	$(this).addClass('offscreen');
    	}
  }); 


/*$('.fadeIn').each(function() {
    if ($(this).isInViewport()) {
      $(this)).addClass('onscreen');
    } else {
       $(this).addClass('offscreen');
    }
  });*/

});


function canUseWebP() {
    var elem = document.createElement('canvas');

    if (!!(elem.getContext && elem.getContext('2d'))) {
        // was able or not to get WebP representation
        return elem.toDataURL('image/webp').indexOf('data:image/webp') == 0;
    }

    // very old browser like IE 8, canvas not supported
    return false;
}

$(function(){
if(canUseWebP()){
     $('body').addClass('webp').removeClass('nowebp');
}else{
     $('body').addClass('nowebp').removeClass('webp');
}
});

(function($){
  'use strict';
    $(window).on('load', function () {
        /*if ($(".pre-loader").length > 0){
            $(".pre-loader").fadeOut("slow");
        }
        */
        $('body').removeClass('noscript');
        setTimeout(function(){ $('body').addClass('loaded'); },400);
    
    });
})(jQuery)