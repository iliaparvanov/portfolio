//Init SmoothScroll
const scroll = new SmoothScroll('.hero a[href*="#"]', {
	speed: 800
});

var controller = new ScrollMagic.Controller();

/*if(window.innerWidth > 1024) {
	var pinNav = new ScrollMagic.Scene({
		triggerHook: 'onLeave',
		triggerElement: '#nav'
	})
	.setPin('#nav', {pushFollowers: false})
	.setClassToggle('#nav', 'has-background-white')
	.addTo(controller);

	var changeTextColor = new ScrollMagic.Scene({
		triggerHook: 'onLeave',
		triggerElement: '#nav'
	})
	.setClassToggle('#nav', 'has-text-black')
	.addTo(controller);

	var pinContactMe = new ScrollMagic.Scene({
		triggerHook: 'onLeave',
		triggerElement: '#contactme'
	})
	.setPin('#contactme', {pushFollowers: false})
	.addTo(controller);
}*/

var blackNavbar = new ScrollMagic.Scene({
	triggerHook: 'onLeave',
	triggerElement: '#imilia'
})
.setClassToggle('.navbar', 'has-background-black')
.addTo(controller);


var allSections = document.getElementsByClassName("section");
for (let section of allSections) {
	let scene = new ScrollMagic.Scene({
		triggerElement: section,
		reverse: false
	})
	.setClassToggle(section, 'fade-in')
	.addIndicators()
	.addTo(controller);
}

