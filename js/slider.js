const cardWrapper = document.querySelector(".card-wrapper");
const carousel = document.querySelector(".carousel");
const firstCardWidth = carousel.querySelector(".card").offsetWidth;
const arrowBtns = document.querySelectorAll(".card-wrapper i");
const carouselChildrens = [...carousel.children];

let isDragging = false, isAutoPlay = true, startX, startScrollLeft, timeoutId;

// Get the number of cards that can fit in the carousel at once
let cardPerView = Math.round(carousel.offsetWidth / firstCardWidth);

// Insert copies of the last few cards to beginning of carousel for infinite scrolling
carouselChildrens.slice(-cardPerView).reverse().forEach(card => {
    carousel.insertAdjacentHTML("afterbegin", card.outerHTML);
});

// Insert copies of the first few cards to end of carousel for infinite scrolling
carouselChildrens.slice(0, cardPerView).forEach(card => {
    carousel.insertAdjacentHTML("beforeend", card.outerHTML);
});

// Прокручивает карусель в нужном месте, чтобы скрыть первые несколько дубликатов карточек в Firefox
carousel.classList.add("no-transition");
carousel.scrollLeft = carousel.offsetWidth;
carousel.classList.remove("no-transition");

// Возможность при нажатии по стрелкам крутить 
arrowBtns.forEach(btn => {
    btn.addEventListener("click", () => {
        carousel.scrollLeft += btn.id == "left" ? -firstCardWidth : firstCardWidth;
    });
});

const dragStart = (e) => {
    isDragging = true;
    carousel.classList.add("dragging");
    // Записывает начальный курсор и положение прокрутки карусели
    startX = e.pageX;
    startScrollLeft = carousel.scrollLeft;
}

// Перетаскивание
const dragging = (e) => {
    if(!isDragging) return; // если isDragging ложь, тогда выходит из функции
    // Обновляет прокрутку позиции основываясь на движении курсора
    carousel.scrollLeft = startScrollLeft - (e.pageX - startX);
}

// Остановить перетаскивание
const dragStop = () => {
    isDragging = false;
    carousel.classList.remove("dragging");
}

// Бесконечная прокрутка
const infiniteScroll = () => {
    // Если в начале = крути в конец
    if (carousel.scrollLeft === 0) {
        carousel.classList.add("no-transition");
        carousel.scrollLeft = carousel.scrollWidth - (2 * carousel.offsetWidth);
        carousel.classList.remove("no-transition");
    }

    // Если в конце = крути в начало
    else if (Math.ceil(carousel.scrollLeft) === carousel.scrollWidth - carousel.offsetWidth) {
        carousel.classList.add("no-transition");
        carousel.scrollLeft = carousel.offsetWidth + 150;
        carousel.classList.remove("no-transition");
    }

    // Clear existing timeout
    clearTimeout(timeoutId);
    // если не hovering = начинай autoplay
    if(!cardWrapper.matches(":hover")) autoPlay();
}

const autoPlay = () => {
    // если окно меньше 800px или автоплей выключен, тогда выходи из функции
    if (window.innerWidth < 800 || !isAutoPlay) return;
    // крути, добавляя по размеру firstCardWidth, через каждые 2500ms 
    timeoutId = setTimeout(() => carousel.scrollLeft += firstCardWidth, 2500);
}
autoPlay();

carousel.addEventListener("mousedown", dragStart);
carousel.addEventListener("mousemove", dragging);
document.addEventListener("mouseup", dragStop);
carousel.addEventListener("scroll", infiniteScroll);
cardWrapper.addEventListener("mouseenter", () => clearTimeout(timeoutId));
cardWrapper.addEventListener("mouseleave", autoPlay);
