const carousel = document.querySelector(".carousel")
const firstCardWidth = carousel.querySelector(".card").offsetWidth
const arrowBtns = document.querySelectorAll(".card-wrapper i")

// Возможность при нажатии по стрелкам крутить
arrowBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    carousel.scrollLeft += btn.id == "left" ? -firstCardWidth : firstCardWidth
  })
})
