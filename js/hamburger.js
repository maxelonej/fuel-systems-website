const toggleBtn = document.querySelector(".toggle-btn");
const dropDownMenu = document.querySelector(".dropdown-menu");
const burger = document.querySelector(".burger");

toggleBtn.onclick = () => {
  dropDownMenu.classList.toggle("open");

  document.querySelector("main").addEventListener("click", (event) => {
    if (!dropDownMenu.contains(event.target)) {
      dropDownMenu.classList.remove("open");
      burger.classList.remove("active");
    }
  });
};

burger.addEventListener("click", () => {
  burger.classList.toggle("active");
});
