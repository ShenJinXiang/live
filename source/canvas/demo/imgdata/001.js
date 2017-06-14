(function(){
	let config = {
		width: 600,
		height: 600,
		radius: 200
	};

	const canvas = document.getElementById('canvas');
	canvas.width = config.width;
	canvas.height = config.height;
	const context = canvas.getContext('2d');

	let imgdata = context.getImageData(0, 0, canvas.width, canvas.height);
	for (var i = 0; i < canvas.height; i++) {
		for (var j = 0; i < canvas.width; j++) {
			if ( i * i + j * j <= config.radius * config.radius) {
				imgdata.data[4 * (i * canvas.width + j) + 0] = 255;		
				imgdata.data[4 * (i * canvas.width + j) + 1] = 0;		
				imgdata.data[4 * (i * canvas.width + j) + 2] = 0;		
				imgdata.data[4 * (i * canvas.width + j) + 3] = 255;	
			}
		}
	}

	context.putImageData(imgdata, 0, 0, 0, 0, canvas.width, canvas.height);
})();
