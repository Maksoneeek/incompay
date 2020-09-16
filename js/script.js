
$(document).ready(function () {
    $('.header__burger,.header__burger-mobile,.header__close-mobile').click(function (event) {
        $('.header__burger,.header__menu,.header__menu_animate').toggleClass('active');
        $('.header__close-mobile').removeClass('active')
        $('body').toggleClass('lock')
        const links = $('.header__block_link,.header__language_burger')
        const linkss = $('.header__block_link-mobile')
        links.each(function (e) {
            const item = $(this)
            setTimeout(function () {
                item.toggleClass('active')
            }, e * 500 + 2000)
        })
        linkss.each(function (e) {
            const item = $(this)
            setTimeout(function () {
                item.toggleClass('active')
            }, e * 500 + 2000)
        })
    });
});

$(document).ready(function () {
    $('.reviews-about__slider').slick({
        arrows: false,
        dots: true,
    });
});

$(window).scroll(function (event) {
    var scr = $(this).scrollTop();
    if (scr > 10) {
        $('header').addClass('active-line');
        $(".header__item").addClass("header__item_B");
        $(".header__item-mobile").addClass("active");
        $(".header__item-mobile-link").addClass("active");
        $(".header__logo_img-mobile").addClass("active");
    } else {
        $('header').removeClass('active-line');
        $(".header__item").removeClass("header__item_B");
        $(".header__item-mobile").removeClass("active");
        $(".header__item-mobile-link").removeClass("active");
        $(".header__logo_img-mobile").removeClass("active");
    }
});
$(window).scroll(function (event) {
    var scr = $(this).scrollTop();
    if (scr > 2800) {
        $(".header__item-mobile").addClass("none");
    }
    else {
        $(".header__item-mobile").removeClass("none");
    }
});

$(document).ready(function () {
    $('.tabs__item,.login__tab').click(function (event) {
        $(".tabs__item,.login__tab").removeClass("active")
        $(this).addClass('active');
        $(".tabs__block,.login__block").removeClass("active")
        const id = $(this).attr('to')
        $(`#${id}`).addClass('active')
    })
});

$(document).ready(function () {
    $('.about__link').click(function (e) {
        $('.about__link').removeClass('active')
        $(this).addClass('active')
        const idSector = $(this).attr('href').replace('#', '')

        const sector = $(`#${idSector}`)

        sector.velocity('scroll', {
            duration: 800,
            offset: -50,
            easing: 'ease-in-out',
        });
    })
})
