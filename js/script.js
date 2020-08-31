
$(document).ready(function () {
    $('.header__burger').click(function (event) {
        $('.header__burger,.header__menu,.header__menu_animate').toggleClass('active');
        $('body').toggleClass('lock')
        const links = $('.header__block_link,.header__language_burger')

        links.each(function (e) {
            const item = $(this)
            setTimeout(function () {
                item.toggleClass('active')
            }, e * 500 + 2000)
        })

    });
});

$('.header__nav_link').click(function (event) {
    var goto = $(this).attr('href').replace('#', '');
    var offset = 60;

    $('body,html').stop().stop().animate({ scrollTop: $('.' + goto).offset().top - offset }, 800, function () { });
    return false;
});

if ($(window).scrollTop() > 30) {
    $('header').addClass('active-line');
    $(".header__item").addClass("header__item_B");
}
$(window).scroll(function (event) {
    var scr = $(this).scrollTop();
    if (scr > 30) {
        $('header').addClass('active-line');
        $(".header__item").addClass("header__item_B");
    } else {
        $('header').removeClass('active-line');
        $(".header__item").removeClass("header__item_B");
    }
});

$(document).ready(function () {
    $('.tabs__item').click(function (event) {
        $(".tabs__item").removeClass("active")
        $(this).addClass('active');
        $(".tabs__block").removeClass("active")
        const id = $(this).attr('to')
        $(`#${id}`).addClass('active')
    })
});






