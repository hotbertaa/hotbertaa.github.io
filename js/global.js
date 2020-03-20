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
});
    
var lastScrollTop = 0;
$(window).on('scroll',function(e){
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
if(_scroll >= 1){} else {
	$('body').removeClass("scrollx").removeClass("scrolly").removeClass("scrollz");
  $("#wrap").removeClass("scrollr");  
}