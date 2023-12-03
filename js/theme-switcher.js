let path = window.location.pathname;
let page = path.split("/").pop();

const iframes = document.querySelectorAll('.iframe iframe');
let light = document.getElementById('light');
let dark = document.getElementById('dark');
let mobileLight = document.getElementById('mobileLight');
let mobileDark = document.getElementById('mobileDark');

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
mobileLight.onclick = () => {
    document.body.classList.add('dark-theme');
    mobileLight.style.display = 'none';
    mobileDark.style.display = 'block';
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
mobileDark.onclick = () => {
    document.body.classList.remove('dark-theme');
    mobileLight.style.display = 'block';
    mobileDark.style.display = 'none';
    if (page === 'index.html') {
        iframes.forEach((iframe, index) => {
            iframe.classList.toggle('night-map');
        });
    }
}
