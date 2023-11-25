const toggleBtn = document.querySelector('.toggle-btn')
const dropDownMenu = document.querySelector('.dropdown-menu')

toggleBtn.onclick = () => {
	dropDownMenu.classList.toggle('open')
}

const burger = document.querySelector('.burger')

burger.addEventListener('click', () => {
	burger.classList.toggle('active')
})
