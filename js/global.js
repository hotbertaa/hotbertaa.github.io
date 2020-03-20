var lastScrollTop = 0;
    $(window).on('scroll',function(e){
        $('.autohide').show();

        if($('#adventureWin').length > 0 || $('#actWin').length > 0 || $('#venueWin').length > 0 || $('#venWin').length > 0){ } else {

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
      if (_scroll >= 1){} else {
            $('body').removeClass("scrollx").removeClass("scrolly").removeClass("scrollz");
            $("#wrap").removeClass("scrollr");  
      }
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