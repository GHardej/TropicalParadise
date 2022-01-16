const nav = document.querySelector('.nav');
const brgBtn = document.querySelector('.burger-btn');
const allNavItems = document.querySelectorAll('.nav__item');

const handleNav = () => {
	nav.classList.toggle('nav--active');
	allNavItems.forEach((navItem) => {
		navItem.addEventListener('click', () => {
			nav.classList.remove('nav--active');
		});
	});

	handleNavItemsAnimation();
};

brgBtn.addEventListener('click', handleNav);

const handleNavItemsAnimation = () => {
	let delayTime = 0;

	allNavItems.forEach((navItem) => {
		navItem.classList.toggle('nav-item-animation');
		navItem.style.animationDelay = '.' + delayTime + 's';
		delayTime++;
	});
};

// const navItems = document.querySelector('.nav__items');
// const removeNav = () => {
// 	nav.classList.remove('nav--active');
// };

// navItems.addEventListener('click', removeNav);

