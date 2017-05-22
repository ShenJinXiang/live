(function(){
		var l = 3;
		var canvas = document.getElementById('canvas');
		canvas.height = canvas.width = 255 * l;
		var context = canvas.getContext('2d');
		var range = document.getElementById('range');
		range.style.width = canvas.width + 'px';
		imgData = context.getImageData(0, 0, canvas.width, canvas.height);

		draw(parseInt(range.value));

		range.onmousemove = function() {
			draw(parseInt(range.value));
		};

		range.onclick = function() {
			draw(parseInt(range.value));
		};

		function draw(v) {
			for (var i = 0; i < canvas.height; i++) {
				for (var j = 0; j < canvas.width; j++) {
					imgData.data[(i * canvas.width + j) * 4] = Math.floor(i / l);
					imgData.data[(i * canvas.width + j) * 4 + 1] = Math.floor(j / l);
					imgData.data[(i * canvas.width + j) * 4 + 2] = v;
					imgData.data[(i * canvas.width + j) * 4 + 3] = 255;
				}
			}
			context.putImageData(imgData, 0, 0);
		}
})();
