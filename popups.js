// Использовать класс popup-link для всплывающих окон
const popupLinks = document.querySelectorAll('.popup-link');
const body = document.querySelector('body');

const timeout = 800;

if (popupLinks.length > 0) {
    for (let i = 0; i < popupLinks.length; i++) {
        const popupLink = popupLinks[i];
        popupLink.addEventListener("click", e => {
            const popupName = popupLink.getAttribute('href').replace('#', '');
            const currentPopup = document.getElementById(popupName);
            popupOpen(currentPopup);
            e.preventDefault();
        });
    }
}

// X
const popupCloseIcon = document.querySelectorAll('.close-popup');

if (popupCloseIcon.length > 0) {
    for (let i = 0; i < popupCloseIcon.length; i++) {
        const el = popupCloseIcon[i];
        el.addEventListener('click', e => {
            popupClose(el.closest('.popup'));
            e.preventDefault();
        })
    }
}

// Открытие popup'а
const popupOpen = (currentPopup) => {
    if (currentPopup) {
        // Получение открытого popup'а
        const popupActive = document.querySelector('.popup.open');
        // Если он существует - закрыть его.
        if (popupActive) {
            popupClose(popupActive, false);
        }
        currentPopup.classList.add('open');
        currentPopup.addEventListener("click", e => {
            if (!e.target.closest('.popup__content')) {
                popupClose(e.target.closest('.popup'));
            }
        });
    }
}

const popupClose = (popupActive, doUnlock = true) => {
    popupActive.classList.remove('open');
}

// Закрытие всплывающего окна через ESC
document.addEventListener('keydown', event => {
    if (event.which === 27) {
        const popupActive = document.querySelector('.popup.open');
        popupClose(popupActive);
    }
});
