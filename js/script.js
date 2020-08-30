
$(document).ready(function () {
    $('.header__burger').click(function (event) {
        $('.header__burger,.header__menu').toggleClass('active');
        $('body').toggleClass('lock')
    });
});

$('.header__nav_link').click(function(event) {
    var goto=$(this).attr('href').replace('#','');
    var offset=60;

$('body,html').stop().stop().animate({scrollTop: $('.'+goto).offset().top-offset},800,function() {});
    return false;
});

if($(window).scrollTop()>30){
	$('header').addClass('active-line');
}
$(window).scroll(function(event) {
		var scr=$(this).scrollTop();
	if(scr>30){
		$('header').addClass('active-line');
	}else{
		$('header').removeClass('active-line');
	}
});







