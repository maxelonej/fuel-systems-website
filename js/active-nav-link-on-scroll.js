let sections = document.querySelectorAll('.fix-nav');
let navLinks = document.querySelectorAll('header ul li a')

window.onscroll = () => {
    sections.forEach(section => {
        let top = window.scrollY;
        let offset = section.offsetTop - 70;
        let height = section.offsetHeight;
        let id = section.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                document.querySelector('header .nav a[href*=' + id + ']').classList.add('active');
            });
        };
    });
};
