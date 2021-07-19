function introAnimation() {
	setTimeout(() => {
		$(".intro-bg-transition").removeClass("is-active");
	}, 300);

	setTimeout(() => {
		$("#intro-name").removeClass("is-active");
	}, 1300);

	setTimeout(() => {
		$("#intro-sub").removeClass("is-active");
	}, 1300);

	setTimeout(() => {
		$("#intro-img").removeClass("is-active");
	}, 1500);

	setTimeout(() => {
		$("#nav-1").removeClass("is-active");
	}, 1700);

	setTimeout(() => {
		$("#nav-2").removeClass("is-active");
	}, 1900);

	setTimeout(() => {
		$("#nav-3").removeClass("is-active");
	}, 2100);

	setTimeout(() => {
		$("html").css("overflow-y", "visible");
	}, 2300);

	setTimeout(() => {
		$("body").css("overflow-y", "visible");
	}, 2300);
}

function navBarInactive() {
	setTimeout(() => {
		$("#nav-1").removeClass("is-active");
	}, 300);

	setTimeout(() => {
		$("#nav-2").removeClass("is-active");
	}, 500);

	setTimeout(() => {
		$("#nav-3").removeClass("is-active");
	}, 700);
}

function navBarActive() {
	setTimeout(() => {
		$("#nav-1").addClass("is-active");
	}, 300);

	setTimeout(() => {
		$("#nav-2").addClass("is-active");
	}, 500);

	setTimeout(() => {
		$("#nav-3").addClass("is-active");
	}, 700);
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
	if ($(window).width() > 600) {
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

function navBarFunc() {
	var x = document.getElementById("navbar");
	if (x.className === "nav") {
		x.className += " responsive";
	} else {
		x.className = "nav";
	}
}

$(document).ready(function () {
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

		divScrollAnim(value);

		if (value != 0) {
			navBarActive();
		} else {
			navBarInactive();
		}
	});
});
