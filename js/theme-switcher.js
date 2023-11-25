var desktopSwitcher = document.getElementById('theme-toggle');
var mobileSwitcher = document.getElementById('dropdown-theme-toggle')

desktopSwitcher.onclick = () => {
    document.body.classList.toggle('dark-theme');
}

mobileSwitcher.onclick = () => {
	document.body.classList.toggle('dark-theme')
}