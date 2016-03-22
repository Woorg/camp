$(document).ready(function() {

	$(".crew__tabs-nav a").click(function(event) {
		event.preventDefault();
		$(this).addClass("active");
		$(this).siblings().removeClass("active");
		var tab = $(this).attr("href");
		$(".crew__tabs-content").not(tab).removeClass('active').hide();
		$(tab).fadeIn().addClass('active').show();

		slider2.reloadSlider();

		console.log($(tab).hasClass('active'));



	});

	var slider2 = $('.crew-slider__list_2').bxSlider({
		minSlides: 3,
		maxSlides: 3,
		moveSlides: 3,
		slideWidth: 290,
		pager: false,
		infiniteLoop: true,
		adaptiveHeight: true
	});

	var slider = $('.crew-slider__list').bxSlider({
		minSlides: 3,
		maxSlides: 4,
		moveSlides: 4,
		slideWidth: 290,
		pager: false,
		infiniteLoop: true,
		adaptiveHeight: true
	});



});
