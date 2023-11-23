// Awards vertical scrolling
let scrollContainer = document.querySelector(".gallery");
let backBtn = document.getElementById("backBtn");
let nextBtn = document.getElementById("nextBtn");

// Управление колесиком мыши
scrollContainer.addEventListener("wheel", (event) => {
    event.preventDefault();
    scrollContainer.scrollLeft += event.deltaY;
    scrollContainer.style.scrollBehavior = "auto";
})

nextBtn.addEventListener("click", () => {
    scrollContainer.style.scrollBehavior = "smooth";
    scrollContainer.scrollLeft += 920;
});

backBtn.addEventListener("click", () => {
    scrollContainer.style.scrollBehavior = 'smooth'
    scrollContainer.scrollLeft -= 920;
});

document.addEventListener('DOMContentLoaded', () => {
    var option1 = document.querySelector('.option-1');
    var option2 = document.querySelector('.option-2');
    var option3 = document.querySelector('.option-3');

    var mapChoiceImg1 = document.querySelector('.option-1 .map-choice-img img');
    var mapChoiceImg2 = document.querySelector('.option-2 .map-choice-img img');
    var mapChoiceImg3 = document.querySelector('.option-3 .map-choice-img img');

    var mapChoice1 = document.querySelector('.iframe-1');
    var mapChoice2 = document.querySelector('.iframe-2');
    var mapChoice3 = document.querySelector('.iframe-3');

    option1.addEventListener('click', () => {
        mapChoiceImg1.src = 'img/map/active.png';
        mapChoiceImg2.src = 'img/map/unactive.png';
        mapChoiceImg3.src = 'img/map/unactive.png';

        mapChoice1.style = 'display: block;';
        mapChoice2.style = 'display: none;';
        mapChoice3.style = 'display: none;';
    });
    option2.addEventListener('click', () => {
        mapChoiceImg1.src = 'img/map/unactive.png';
        mapChoiceImg2.src = 'img/map/active.png';
        mapChoiceImg3.src = 'img/map/unactive.png';

        mapChoice1.style = 'display: none;';
        mapChoice2.style = 'display: block;';
        mapChoice3.style = 'display: none;';
    });
    option3.addEventListener('click', () => {
        mapChoiceImg1.src = 'img/map/unactive.png';
        mapChoiceImg2.src = 'img/map/unactive.png';
        mapChoiceImg3.src = 'img/map/active.png';

        mapChoice1.style = 'display: none;';
        mapChoice2.style = 'display: none;';
        mapChoice3.style = 'display: block;';
    });
});

// awards full img
var fullImgBox = document.getElementById('fullImgBox');
var fullImg = document.getElementById('fullImg');

const openFullImg = (img) => {
    fullImgBox.style.display = 'flex';
    fullImg.src = img;
}

const closeFullImg = () => {
    fullImgBox.style.display = 'none';
}

// Закрытие всплывающего окна через ESC
document.addEventListener('keydown', event => {
    if (event.which === 27) {
        closeFullImg();
    }
});

fullImgBox.addEventListener("click", (event) => {
    fullImgBox.style.display = 'none';
});
