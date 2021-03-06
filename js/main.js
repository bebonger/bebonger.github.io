function introAnimation() {
	setTimeout(() => {
		$("#intro-name").removeClass("is-active");
	}, 1300);

	setTimeout(() => {
		$("#intro-sub").removeClass("is-active");
	}, 1300);

	setTimeout(() => {
		$("#intro-img").removeClass("is-active");
	}, 1500);
	/*
	setTimeout(() => {
		$("html").css("overflow-y", "visible");
	}, 2300);

	setTimeout(() => {
		$("body").css("overflow-y", "visible");
	}, 2300);*/
}

function divScrollAnim(value) {
	if (value >= $("#about-me").offset().top - 300) {
		setTimeout(() => {
			$("#js-about-scroll-listener1").removeClass("is-active");
		}, 200);

		setTimeout(() => {
			$("#js-about-scroll-listener2").removeClass("is-active");
		}, 500);

		setTimeout(() => {
			$("#js-about-scroll-listener3").removeClass("is-active");
		}, 800);

		setTimeout(() => {
			$("#js-about-scroll-listener4").removeClass("is-active");
		}, 1100);
	} else {
		$("#js-about-scroll-listener1").addClass("is-active");
		$("#js-about-scroll-listener2").addClass("is-active");
		$("#js-about-scroll-listener3").addClass("is-active");
		$("#js-about-scroll-listener4").addClass("is-active");
	}

	if (value >= $("#my-hobby").offset().top - 300) {
		console.log("y");
		setTimeout(() => {
			$("#js-hobby-scroll-listener1").removeClass("is-active");
		}, 200);

		setTimeout(() => {
			$("#js-hobby-scroll-listener2").removeClass("is-active");
		}, 500);

		setTimeout(() => {
			$("#js-hobby-scroll-listener3").removeClass("is-active");
		}, 800);

		setTimeout(() => {
			$("#js-hobby-scroll-listener4").removeClass("is-active");
		}, 1100);
	} else {
		$("#js-hobby-scroll-listener1").addClass("is-active");
		$("#js-hobby-scroll-listener2").addClass("is-active");
		$("#js-hobby-scroll-listener3").addClass("is-active");
		$("#js-hobby-scroll-listener4").addClass("is-active");
	}
}

function updateDivScroll(Div, value) {
	if ($(window).width() > 900) {
		Div.css("opacity", 1 - Math.abs(value - Div.offset().top) * 0.001);
	} else {
		Div.css("opacity", 1 - Math.abs(value - Div.offset().top) * 0.0005);
	}

	Div.css(
		"transform",
		"scale(" +
			(1 - Math.abs(value - Div.offset().top) * 0.0002) +
			"," +
			(1 - Math.abs(value - Div.offset().top) * 0.0002) +
			")"
	);
}

function updateNavForMobile() {
	if (window.innerWidth > 900) {
		// $(document.body).removeClass("active");
		$("#mobile-nav").css("display", "none");
	} else {
		$("#mobile-nav").css("display", "block");
	}
}

var resizeTimer;

function updateResize() {
	updateNavForMobile();

	$(document.body).addClass("notransition");
	clearTimeout(resizeTimer);
	resizeTimer = setTimeout(() => {
		$(document.body).removeClass("notransition");
	}, 400);



}

$(document).ready(function () {

	var title = $(document).attr('title');
	console.log(title);
	htmlTags = document.getElementsByTagName("html");
	if (title == "Joash Foo | Home") {
		console.log("Home");
		document.body.style.backgroundColor = "#fc6341";
	} else if (title == "Joash Foo | Hobbies") {
		document.body.style.backgroundColor = "#3FA7D6";
		document.getElementsByTagName("html")[0].setAttribute("background-color", "#3FA7D6");
	}

	
	// mobile nav bars
	updateNavForMobile();
	introAnimation();

	let introDiv = $("#intro");
	$(document).scroll(function () {
		var value = window.scrollY;

		introDiv.css("top", value * 0.5 + "px");
		introDiv.css("opacity", 1 - value * 0.001);
		introDiv.css(
			"transform",
			"scale(" + (1 - value * 0.0002) + "," + (1 - value * 0.0002) + ")"
		);

		// updateDivScroll($("#js-about-scroll-listener-wrapper"), value);
		// updateDivScroll($("#js-hobby-scroll-listener-wrapper"), value);
	});
	
	window.onresize = updateResize;
	
	let mobileMenuActive = false;
	$("#mobile-menu").click(function() {
		console.log("clicked");
		if (mobileMenuActive) {
			$(".mobile-nav-menu").removeClass("is-active");
		} else {
			$(".mobile-nav-menu").addClass("is-active");
		}

		document.querySelector("#mobile-menu").classList.toggle("change");
		mobileMenuActive = !mobileMenuActive;
	});

	$("#scroll-back-arrow").click(function () {
		document.body.scrollTop = 0;
		document.documentElement.scrollTop = 0;
	});
});
