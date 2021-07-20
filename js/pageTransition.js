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

function loadIn() {
	$(".intro-bg-transition").removeClass("is-active");

	setTimeout(() => {
		$("#nav-1").removeClass("is-active");
	}, 1700);

	setTimeout(() => {
		$("#nav-2").removeClass("is-active");
	}, 1900);

	setTimeout(() => {
		$("#nav-3").removeClass("is-active");
	}, 2100);
}

function loadOut() {
	$(".intro-bg-transition").addClass("is-active");
}

$("document").ready(function () {
	loadIn();

	const anchors = document.querySelectorAll("a");
	for (let i = 0; i < anchors.length; ++i) {
		const anchor = anchors[i];

		anchor.addEventListener("click", (e) => {
			e.preventDefault();
			let target = e.target.href;
			console.log(e);
			if (e.target.classList.contains("nav-anim")) {
				setTimeout(() => {
					window.location.href = target;
				}, 1600);
				loadOut();
			}
		});
	}

	$(document).scroll(function () {
		var value = window.scrollY;
		if (value != 0) {
			navBarActive();
			$("#scroll-back-arrow").removeClass("is-active");
		} else {
			navBarInactive();
			$("#scroll-back-arrow").addClass("is-active");
		}
	});

	$("#scroll-back-arrow").click(function () {
		document.body.scrollTop = 0;
		document.documentElement.scrollTop = 0;
	});
});
