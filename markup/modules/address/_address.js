ymaps.ready(function () {
	var myMap = new ymaps.Map('first', {
	    center: [55.75826, 37.626493],
	    zoom: 16,
	    controls: ['smallMapDefaultSet']
	}),
	myPlacemark = new ymaps.Placemark(myMap.getCenter(), {

	}, {
	    // Опции.
	    // Необходимо указать данный тип макета.
	    iconLayout: 'default#image'
	});

	myMap.geoObjects.add(myPlacemark);

	var myMap2 = new ymaps.Map('second', {
	    center: [45.046361, 38.982419],
	    zoom: 16,
	    controls: ['smallMapDefaultSet']
	}),
	myPlacemark = new ymaps.Placemark(myMap2.getCenter(), {

	}, {
	    // Опции.
	    // Необходимо указать данный тип макета.
	    iconLayout: 'default#image'
	});

	myMap2.geoObjects.add(myPlacemark);

});
