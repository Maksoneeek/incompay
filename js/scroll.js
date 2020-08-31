var currentScroll = 0

function scrollSector(event) {
    if (!$('body').hasClass('scrollblock') && !$('body').hasClass('lock')) {
        $('body').addClass('scrollblock')

        const activeSector = $('.sector.active');
        const nextSector = activeSector.next('.sector')
        const prevSector = activeSector.prev('.sector')

        if (event.key == 'ArrowDown' || event.key == 'PageDown' || event.deltaY > 0) {
            goToSector(nextSector, activeSector);
            console.log(nextSector.length)
        } else if (event.key == 'ArrowUp' || event.key == 'PageUp' || event.deltaY < 0) {
            goToSector(prevSector, activeSector);
        }
    }
    currentScroll = $(this).scrollTop()
}

document.addEventListener('wheel', scrollSector)
document.addEventListener('keyup', scrollSector)

function goToSector(sector, activeSector) {
    if (sector.length > 0) {
        sector.velocity('scroll', {
            duration: 800,
            offset: -100,
            easing: 'ease-in-out',
        });
        activeSector.removeClass('active')
        sector.addClass('active')
    }
    setTimeout(function () {
        $('body').removeClass('scrollblock')
    }, 800)
}