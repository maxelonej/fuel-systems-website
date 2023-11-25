const toggleBtn = document.querySelector('.toggle-btn')
const dropDownMenu = document.querySelector('.dropdown-menu')

toggleBtn.onclick = () => {
	dropDownMenu.classList.toggle('open')

	document.querySelector('main').addEventListener('click', (event) => {
		if (!document.querySelector('.dropdown-menu').contains(event.target)) {
			document.querySelector('.dropdown-menu').classList.remove('open')
		}
	})
}

const burger = document.querySelector('.burger')

burger.addEventListener('click', () => {
	burger.classList.toggle('active')
})
