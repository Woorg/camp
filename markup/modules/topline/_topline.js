$(document).ready(function($) {

	$(window).scroll(function(event) {
		/* Act on the event */
		var scrollPos = $(window).scrollTop();
		var topLine = $('.topline');
		if(scrollPos > 50) {
			console.log('true');
			topLine.css('position', 'fixed').fadeIn().slideDown(800);
		} else {
			topLine.css('position', 'static').fadeIn().slideDown(800);
		}

	});


	$('.main-nav__link[href*="#"]').mPageScroll2id({
		scrollSpeed: 500,
		offset: 30
	});
});
