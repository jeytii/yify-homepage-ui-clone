$(document).ready(function() {

	function unlink(e) {
		e.preventDefault();
	}

	function slideDropdown() {
		$('.js-search-dropdown').slideToggle();
	}

	function toggleForm(keywordShow, keywordHide) {
		$('.js-form').addClass('shown');

		$(`.js-${keywordHide}-tab`).removeClass('active-tab');
		$(`.js-${keywordHide}-form`).removeClass('active-form');

		$(`.js-${keywordShow}-tab`).addClass('active-tab');
		$(`.js-${keywordShow}-form`).addClass('active-form');
	}

	function toggleActive() {
		var name = $(this).attr('class').split(' ')[1].split('-')[1];
		
		$(this).addClass('active-tab').siblings().removeClass('active-tab');
		$(`.js-${name}-form`).addClass('active-form').siblings().removeClass('active-form');
	}

	function hideForm(e) {
		if(e.key === 'Escape') {
			$('.js-form').removeClass('shown');
		}
	}

	function closeForm(e) {
		if($(e.target).is('.form__overlay')) {
			$(e.target).parent().removeClass('shown');
		}
	}


	$('a').on('click', unlink);
	$(window).on('keyup', hideForm);
	$(window).on('click', closeForm);
	$('.js-search-button').on('click', slideDropdown);
	$('.js-login-tab, .js-register-tab').on('click', toggleActive)
	$('.js-login-button').on('click', toggleForm.bind(null, 'login', 'register'));
	$('.js-register-button').on('click', toggleForm.bind(null, 'register', 'login'));

})