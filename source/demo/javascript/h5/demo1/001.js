(function () {
	var video = document.getElementById('myvideo');
	video.src = '../oggs/001.ogg';
	video.width = 600;
	video.height = 400;

	var jindu = document.getElementById('jindu');
	jindu.min = 0;
	jindu.value = 0;

	video.onloadedmetadata = function () {
		video.play();
		document.body.appendChild(video);
		var initialTime = video.initialTime;
		var duration = video.duration;
		jindu.max = duration;
	
		console.log(initialTime);
		console.log(duration);
	};

	jindu.onmousemove = function () {
		var jd = jindu.value;
		video.currentTime = jd;
	}
	var play = document.getElementById('play');
	var pause = document.getElementById('pause');

	play.onclick = function () {
		video.play();
	};
	pause.onclick = function () {
		video.pause();
	};
})();
