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
