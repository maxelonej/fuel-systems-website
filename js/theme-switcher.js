var desktopSwitcher = document.getElementById('theme-toggle');
var mobileSwitcher = document.getElementById('dropdown-theme-toggle');
const iframes = document.querySelectorAll('.iframe iframe');

desktopSwitcher.onclick = () => {
    // Включение темной темы
    document.body.classList.toggle('dark-theme');
    
    // Включение ночной карты
    iframes.forEach((iframe, index) => {
        iframe.classList.toggle('night-map');
    })
}

// То же самое, только для другого input id, который находится в hamburger menu 
mobileSwitcher.onclick = () => {
	document.body.classList.toggle('dark-theme');
    iframes.forEach((iframe, index) => {
        iframe.classList.toggle('night-map');
    })
}
