$(document).ready(function() {
    $(document).scroll(function () {
        var value = window.scrollY;
        $("#js-about-scroll-listener-wrapper").css(
			"opacity",
			1 - ($("#js-about-scroll-listener-wrapper").offset().top - value) * 0.001
		);

		$("#js-hobby-scroll-listener-wrapper").css(
			"opacity",
			1 - ($("#js-hobby-scroll-listener-wrapper").offset().top - value) * 0.001
		);
    });
})