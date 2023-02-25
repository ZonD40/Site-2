const menu = document.querySelector('.promo__menu'),
	  menuButton = document.querySelector('.promo__menu-button'),
	  menuItems = document.querySelectorAll('.promo__menu-item');

menuButton.addEventListener('click', () => {
	toggleClass(menu, 'promo__menu_active');
	menuItems.forEach((e) => {
		toggleClass(e, 'promo__menu-item_active');
	})
});

function toggleClass(element, toggledClass) {
	element.classList.toggle(toggledClass);
}
