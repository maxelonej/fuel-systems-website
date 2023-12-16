// Awards vertical scrolling
let scrollContainer = document.querySelector(".gallery");

// Управление колесиком мыши
scrollContainer.addEventListener("wheel", (event) => {
    event.preventDefault();
    scrollContainer.scrollLeft += event.deltaY;
    scrollContainer.style.scrollBehavior = "auto";
})

// awards full img
let fullImgBox = document.getElementById('fullImgBox');
let fullImg = document.getElementById('fullImg');

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
