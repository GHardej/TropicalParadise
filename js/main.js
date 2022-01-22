const nav = document.querySelector('.nav');
const brgBtn = document.querySelector('.burger-btn');
const allNavItems = document.querySelectorAll('.nav__item');
const brgBtnBars = document.querySelector('.burger-btn__bars');
const allSections = document.querySelectorAll('.section');
const footerYear = document.querySelector('.footer__year');

const handleNav = () => {
	nav.classList.toggle('nav--active');

	brgBtnBars.classList.remove('burger-btn-black-bars');

	allNavItems.forEach((navItem) => {
		navItem.addEventListener('click', () => {
			nav.classList.remove('nav--active');
		});
	});

	handleNavItemsAnimation();
};

const handleNavItemsAnimation = () => {
	let delayTime = 0;

	allNavItems.forEach((navItem) => {
		navItem.classList.toggle('nav-item-animation');
		navItem.style.animationDelay = '.' + delayTime + 's';
		delayTime++;
	});
};

const handleObserver = () => {
	const currentSection = window.scrollY;

	allSections.forEach((section) => {
		if (
			section.classList.contains('white-section') &&
			section.offsetTop <= currentSection + 60
		) {
			brgBtnBars.classList.add('burger-btn-black-bars');
		} else if (
			!section.classList.contains('white-section') &&
			section.offsetTop <= currentSection + 60
		) {
			brgBtnBars.classList.remove('burger-btn-black-bars');
		}
	});
};

const handleCurrentYear = () => {
	const year = new Date().getFullYear();
	footerYear.innerText = year;
};

handleCurrentYear();
brgBtn.addEventListener('click', handleNav);
window.addEventListener('scroll', handleObserver);
