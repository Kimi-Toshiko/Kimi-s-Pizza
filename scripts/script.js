// DIFFERENT IMAGE SIZE FOR DIFFERENT BROWSERS
var user = detect.parse(navigator.userAgent);
var pizzaImg1 = document.querySelector('.img1');
var pizzaImg2 = document.querySelector('.img2');
var pizzaImg3 = document.querySelector('.img3');

if (user.browser.family === 'Chrome') {
	pizzaImg1.style.width = "50%";
	pizzaImg2.style.width = "50%";
	pizzaImg3.style.width = "50%";
}
else if (user.browser.family === 'Firefox') {
	pizzaImg1.style.width = "250%";
	pizzaImg2.style.width = "250%";
	pizzaImg3.style.width = "250%";
}
else {
	pizzaImg1.style.width = "100%";
	pizzaImg2.style.width = "100%";
	pizzaImg3.style.width = "100%";
}

document.body.onload = function() {
	var unrealWebsiteMessage = document.querySelector('.unreal-website-message');
	unrealWebsiteMessage.style.display = "block";

	var closeButton = document.querySelector('.close-button');
	closeButton.onclick = function() {
		unrealWebsiteMessage.style.display = "none";
	};
};