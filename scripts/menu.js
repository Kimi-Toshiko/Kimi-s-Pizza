// NAVIGATION MENU
var hamburger = document.querySelector('.hamburger');
var navLinks = document.querySelector('.nav-links');

hamburger.onclick = function hamburgerMenu() {
	navLinks.classList.toggle("open");
	console.log('menu is shown');
};