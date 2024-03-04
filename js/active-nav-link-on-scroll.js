let sections = document.querySelectorAll(".fix-nav");
let navLinks = document.querySelectorAll("header ul li a");

window.onscroll = () => {
  sections.forEach((section) => {
    let top = window.scrollY;
    let offset = section.offsetTop - 240;
    let vacanciesOffset = section.offsetTop - 440;
    let height = section.offsetHeight;
    let id = section.getAttribute("id");

    let path = window.location.pathname;
    let page = path.split("/").pop();

    if (page === "vacancies.html") {
      if (top >= vacanciesOffset && top < vacanciesOffset + height) {
        navLinks.forEach((link) => {
          link.classList.remove("active");
          document
            .querySelector("header .nav a[href*=" + id + "]")
            .classList.add("active");
        });
      }
    } else if (page === "index.html") {
      if (top >= offset && top < offset + height) {
        navLinks.forEach((link) => {
          link.classList.remove("active");
          document
            .querySelector("header .nav a[href*=" + id + "]")
            .classList.add("active");
        });
      }
    }
  });
};
