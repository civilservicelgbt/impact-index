---
---


$(document).ready(function() {
	
	$('#fullpage').fullpage({
		
		// Sections
		sectionsColor: ['none', 'none', 'none', 'none', 'none', 'none'],
		anchors: ['home', 'about', 'special', 'lgbt', 'allies', 'networks', 'teams', 'colophon'],
		slidesNavigation: false,
		slidesNavPosition: 'bottom',
		controlArrows: true,
		
		// Scrolling
		scrollingSpeed: 1000,
		scrollOverflow: true,
		loopBottom: false,
		loopHorizontal: false,
		animateAnchor: true,
		
		// Accessibility
		keyboardScrolling: true,
		recordHistory: true,
		
	});
	
});