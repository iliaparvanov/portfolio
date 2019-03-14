//Init SmoothScroll
const scroll = new SmoothScroll('.hero a[href*="#"]', {
	speed: 800
});

var controller = new ScrollMagic.Controller();

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
	.addTo(controller);
}

