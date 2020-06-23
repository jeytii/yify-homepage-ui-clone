const query = document.querySelector.bind(document)
const links = document.querySelectorAll('a')

function prevent(e) {
	e.preventDefault()
}

function toggleDropdown() {
	query('.js-search-dropdown').classList.toggle('dropped')
}

function toggleForm(keywordShow, keywordHide) {
	query('.js-form').classList.add('shown')

	query(`.js-${keywordHide}-tab`).classList.remove('active-tab')
	query(`.js-${keywordHide}-form`).classList.remove('active-form')

	query(`.js-${keywordShow}-tab`).classList.add('active-tab')
	query(`.js-${keywordShow}-form`).classList.add('active-form')
}

function toggleActive(name, event) {
	event.target.classList.add('active-tab')

	if (name === 'login') {
		query('.js-login-form').classList.add('active-form')

		query('.js-register-tab').classList.remove('active-tab')
		query('.js-register-form').classList.remove('active-form')
	}
	else {
		query('.js-register-form').classList.add('active-form')

		query('.js-login-tab').classList.remove('active-tab')
		query('.js-login-form').classList.remove('active-form')
	}
}

function hideForm(e) {
	if (e.key !== 'Escape') {
		return
	}

	$('.js-form').removeClass('shown')
}

function closeForm(e) {
	if (e.target !== query('.form__overlay')) {
		return
	}

	e.target.parentElement.classList.remove('shown')
}

links.forEach(link => {
	link.addEventListener('click', prevent)
})

window.addEventListener('keyup', hideForm)
window.addEventListener('click', closeForm)

query('.js-search-button').addEventListener('click', toggleDropdown)
query('.js-login-tab').addEventListener('click', toggleActive.bind(null, 'login'))
query('.js-register-tab').addEventListener('click', toggleActive.bind(null, 'register'))
query('.js-login-button').addEventListener('click', toggleForm.bind(null, 'login', 'register'))
query('.js-register-button').addEventListener('click', toggleForm.bind(null, 'register', 'login'))