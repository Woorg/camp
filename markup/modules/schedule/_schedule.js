$(document).ready(function() {
	$(".tabs__item a").click(function(event) {
		event.preventDefault();
		$(this).parent().addClass("active");
		$(this).parent().siblings().removeClass("active");
		var tab = $(this).attr("href");
		$(".tabs__content").not(tab).css("display", "none");
		$(tab).fadeIn();
	});
});

