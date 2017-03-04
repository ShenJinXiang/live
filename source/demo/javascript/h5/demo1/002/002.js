(function() {
		var video = document.createElement('video');
		video.src = './001.mp4';
		var canvas = document.createElement('canvas');

		video.onloadedmetadata = function () {
			video.play();
			console.log(video.videoWidth);
			console.log(video.videoHeight);

			canvas.width = 2 * video.videoWidth;
			canvas.height = 2 * video.videoHeight;
			var context = canvas.getContext('2d');

			document.body.appendChild(canvas);

			setInterval(function() {
				context.clearRect(0, 0, canvas.width, canvas.height);
				drawVideo();
				drawVideo1();
				drawVideo2();
				drawVideo3();
			}, 30);

			function drawVideo() {
				context.drawImage(video, 0, 0);
			}

			function drawVideo1() {
				context.save();
				context.translate(0, 2 * video.videoHeight);
				context.scale(1, -1)
				context.drawImage(video, 0, 0);
				context.restore();
			}

			function drawVideo2() {
				context.save();
				context.translate(2 * video.videoWidth, 0);
				context.scale(-1, 1);
				context.drawImage(video, 0, 0);
				context.restore();
			}

			function drawVideo3() {
				context.save();
				context.translate(2 * video.videoWidth, 2 * video.videoHeight);
				context.scale(-1, -1);
				context.drawImage(video, 0, 0);
				context.restore();
			}
		}
})();
