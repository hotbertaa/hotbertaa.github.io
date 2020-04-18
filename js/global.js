
$(function(){
//////////////////////////////////////////////////
// WINDOW SCROLL
var lastScrollTop = 0;
$(window).on('scroll',function(e){
	//////////////////////////////////////////////////
	// onscreen
   	$('section').each(function() {
   		if($(window).width()>="768"){
    		perc = 450;
  		} else {
    		perc = 200;
  		}
   		var elementTop = $(this).offset().top;
			var viewportTop = $(window).scrollTop();

			if(viewportTop >= elementTop-perc){
     		$(this).removeClass('offscreen').addClass('onscreen');
    	} else {
    	}
  	});

   $('.autohide').show();
	//////////////////////////////////////////////////
	//body scroll classes
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
	//////////////////////////////////////////////////
	// vertical scroll classes
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
//////////////////////////////////////////////////
// scrollTo
$('.scrollTo').on('click', function(){
    //$('html,body').animate({scrollTop: $($(this).attr('href')).offset().top},500);
    $('.scrollTo').removeClass('selected');
    $(this).addClass('selected');
    if($(this).parents('.window').length > 0 ){
        return true;
    } else {
    	if($($(this).attr('href')).length > 0){
        top = '-1';
        if($(this).attr('href')=="#portfolio"){ top = '-150'; }
        if($(this).attr('href')=="#geronigo"){ top = '10'; }
        if($(this).attr('href')=="#rezbot"){ top = '80'; }
        if($(this).attr('href')=="#about"){ top = '80'; }
        if($(this).attr('href')=="#study"){ top = '-100'; }
        $('html,body').animate({scrollTop: $($(this).attr('href')).offset().top ''+top+'' }, 'slow');
        //$('html,body').animate({scrollTop: $($(this).attr('href')).offset().top -210 }, 'slow');
    	}else{
        	console.log($(this).attr('href')+ ' is missing');
    	}
        return false;
    }
});
//////////////////////////////////////////////////
// menu
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
//////////////////////////////////////////////////
// menu close
$('#menu .close').on('click ', function() {
	$('#menu .s, .slide-menu .overlay').fadeOut(250);
  $('#menu').removeClass('open');
	return false;
});

//$('.READMOREjs').off('click');
$('.READMOREjs').on('click', function(){
  var next = $(this).next();
  var parentID = $(this).parent().attr('id');
  $(this).animate({scrollTop: $("body").offset().top},500);
  if($(this).hasClass('open')===false){
    $('.READMOREjs').removeClass('open');
    $(this).parent().addClass('selected');
    $(next).show().addClass('open');
    $(this).addClass('open');
  } else {
    $(this).parent().removeClass('selected');
    $(next).hide().removeClass('open');
    $(this).removeClass('open');
  }
  return false;
});
//////////////////////////////////////////////////
// check sections onscreen
  //$('.fadeIn').each(function() {
  	var viewportTop = $(window).scrollTop();
		var viewportBottom = $(window).height();

  	var introTop = $('#intro .fadeIn').offset().top;
		if(viewportBottom >= introTop){
  	  $('#intro').addClass('onscreen');
		} else {
			$('#intro').addClass('offscreen');
		}

		var skillsTop = $('#skills .fadeIn').offset().top;

		if(viewportBottom >= skillsTop){
  	  $('#skills').addClass('onscreen');
		} else {
			$('#skills').addClass('offscreen');
		}
	//});

});
//////////////////////////////////////////////////
// webp
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
//////////////////////////////////////////////////
// noscript / loaded
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
