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
