function mini() {
    var w = $(window).outerWidth();
    var h = $(window).outerHeight();
    if (w < 1150 || h < 650) {
        m = true;
    } else {
        m = false;
    }
}
mini();

var currentScroll = 0

function scrollSector(event) {
    if ($(window).width() > 1150) {
        if (!$('body').hasClass('scrollblock') && !$('body').hasClass('lock')) {
            $('body').addClass('scrollblock')

            const activeSector = $('.sector.active');
            const nextSector = activeSector.next('.sector')
            const prevSector = activeSector.prev('.sector')

            if (event.key == 'ArrowDown' || event.key == 'PageDown' || event.deltaY > 0) {
                goToSector(nextSector, activeSector);
            } else if (event.key == 'ArrowUp' || event.key == 'PageUp' || event.deltaY < 0) {
                goToSector(prevSector, activeSector);
            }
        }
        currentScroll = $(this).scrollTop()
    }
}

document.addEventListener('wheel', scrollSector)
document.addEventListener('keyup', scrollSector)

function goToSector(sector, activeSector) {
    console.log(sector)
    if (sector.length > 0) {
        sector.velocity('scroll', {
            duration: 800,
            offset: 85,
            easing: 'ease-in-out',
        });
        activeSector.removeClass('active');
        sector.addClass('active');
        idSector = sector[0].getAttribute('id')

        const headerLinks = document.querySelectorAll('.header__nav_link')
        for (let i = 0; i < headerLinks.length; i++) {
            if (headerLinks[i].getAttribute('href').replace('#', '') === idSector) {
                headerLinks[i].classList.add('active')
                continue
            }
            headerLinks[i].classList.remove('active')
        }

        if (idSector) {
            window.location.hash = idSector
        } else {
            window.location.hash = ''
        }
    }
    setTimeout(function () {
        $('body').removeClass('scrollblock')
    }, 800)
}

$('.header__nav_link,.about__link').click(function (event) {

    const activeSector = $('.sector.active');
    const goto = $(this).attr('href').replace('#', '');
    const sector = $(`#${goto}`)

    goToSector(sector, activeSector)

    return false;
});

let idActiveSector = window.location.hash
if (idActiveSector) {
    const activeSector = $('.sector.active');
    const sector = $(`${idActiveSector}`)
    goToSector(sector, activeSector)
}
