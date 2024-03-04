const showMore = document.querySelector(".more");
const vacanciesLength = document.querySelectorAll(".vacancies-item").length;
let items = 2;

showMore.addEventListener("click", () => {
  items += 2;
  const arr = Array.from(
    document.querySelector(".vacancies-container").children
  );
  const visibleItems = arr.slice(0, items);

  visibleItems.forEach((element) => element.classList.add("is-visible"));

  if (visibleItems.length === vacanciesLength) {
    showMore.style.display = "none";
  }
});
