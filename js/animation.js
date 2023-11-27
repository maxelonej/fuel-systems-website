// Intersection Observer
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        // console.log(entry);
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        } else {
            entry.target.classList.remove('show');
        }
    });
});

const hiddenElements = document.querySelectorAll('.hidden');
const hiddenItems = document.querySelectorAll('.hidden-item');
hiddenElements.forEach((element) => observer.observe(element));
hiddenItems.forEach((element) => observer.observe(element));
