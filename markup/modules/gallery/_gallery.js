$(document).ready( function() {

	$('#carousel').featureCarousel({
		smallFeatureOffset: 53,
		smallFeatureWidth: 230,
		smallFeatureHeight: 185,
		sidePadding: 22,
		trackerIndividual: false,
		trackerSummation: false,
		rightButtonTag: '.carousel-left',
		leftButtonTag: '.carousel-right',
		preload: true,
		movedToCenter: function($feature) {
			// $feature is a jQuery wrapped object describing the featured that is now in the center position.
			var imageUrl = $feature.find('.carousel-image').attr('href');
			var imageCont = $feature.find('.carousel-feature').addClass('slider__item_center');
			console.log(imageCont);
			imageCont.addClass('slider__item_center');
		}
	});


	// $('.slider__item a').magnificPopup({
	// 	type: 'image',
	// 	gallery: {
	// 		enabled: true
	// 	}
	// });



});

