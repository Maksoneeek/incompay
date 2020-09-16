const popupLinks = document.querySelectorAll('.popup-link');
const lockPadding = document.querySelectorAll('.lock-padding');

let unlock = true;

const timeout = 1000;

if (popupLinks.length > 0) {
    for (let index = 0; index < popupLinks.length; index++) {
        const popupLink = popupLinks[index];
        popupLink.addEventListener("click", function (e) {
            const popupName = popupLink.getAttribute('href').replace('#', '');
            const curentPopup = document.getElementById(popupName);
            popupOpen(curentPopup);
            e.preventDefault();
        })
    }
}

const popupCloseIcon = document.querySelectorAll('.close-popup');
if (popupCloseIcon.length > 0) {
    for (let index = 0; index < popupCloseIcon.length; index++) {
        const el = popupCloseIcon[index];
        el.addEventListener('click', function (e) {
            popupClose(el.closest('.popup'));
            e.preventDefault();
        });
    }
}

function setTimer() {
    let time = 3
    const timerInput = document.querySelector('.popup__timer')
    timerInput.style.fontSize = 18 + 'px'
    const timer = setInterval(function () {
        time = time - 1
        let mins = Math.floor(time / 60)
        let seconds = time % 60
        if (seconds < 10) {
            seconds = '0' + seconds
        }
        timerInput.textContent = `${mins}:${seconds}`
        if (time == 0) {
            clearInterval(timer)
            timerInput.style.fontSize = 0
            document.querySelector('.popup__restart').style.fontSize = 12 + 'px'
            document.querySelector('.popup__restart').addEventListener('click', restartTimer)
        }
    }, 1000)
}

function restartTimer() {
    setTimer()
    document.querySelector('.popup__restart').style.fontSize = 0 + 'px'
}

function popupOpen(curentPopup) {

    setTimer()

    if (curentPopup && unlock) {
        const popupActive = document.querySelector('.popup.open');
        curentPopup.classList.add('open');
        curentPopup.addEventListener("click", function (e) {
        });
    }
}


(function () {
    if (!Element.prototype.closest) {
        Element.prototype.closest = function (css) {
            var node = this;
            while (node) {
                if (node.matches(css)) return node;
                else node = node.parentElement;
            }
            return null;
        };
    }
})();
(function () {
    if (!Element.prototype.matches) {
        Element.prototype.matches = Element.prototype.MatchesSelector ||
            Element.prototype.webkitMatchesSelector ||
            Element.prototype.mozMatchesSelector ||
            Element.prototype.msMatchesSelector;
    }
})();


