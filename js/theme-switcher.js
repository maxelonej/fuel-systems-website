let path = window.location.pathname;
let page = path.split("/").pop();

let light = document.getElementById('light');
let dark = document.getElementById('dark');

light.onclick = () => {
    document.body.classList.add('dark-theme');
    light.style.display = 'none';
    dark.style.display = 'block';
    if (page === 'index.html') {
        iframes.forEach((iframe, index) => {
            iframe.classList.toggle('night-map');
        });
    }
}

dark.onclick = () => {
    document.body.classList.remove('dark-theme');
    light.style.display = 'block';
    dark.style.display = 'none';
    if (page === 'index.html') {
        iframes.forEach((iframe, index) => {
            iframe.classList.toggle('night-map');
        });
    }
}
