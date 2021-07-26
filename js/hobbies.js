function addVideo(title, file) {
	// create div
	let container = document.createElement("div");
	container.className = "video-wrapper";

	// create h4
	let t = document.createElement("h4");
	t.appendChild(document.createTextNode(title));

	// create img
	let video = document.createElement("iframe");
	video.alt = title;
	video.src = file;
	video.title = "Youtube Video Player";
	video.frameBorder = "0";
	video.allow =
		"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture";
	video.allowFullscreen = true;

	container.appendChild(t);
	container.appendChild(video);

	return container; // create div element
}

function loadImages() {
	let videoList = document.querySelector(".video-flex-container");

	for (let i = 0; i < dataList.length; i++) {
		//console.log( item );
		let item = dataList[i];
		let newDiv = addVideo(item.name, item.url);

		videoList.appendChild(newDiv);
	}
}

$(document).ready(function () {
	loadImages();
});
