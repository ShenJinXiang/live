(function() {
	let canvas = document.getElementById('canvas');
	canvas.width = window.innerWidth;
	canvas.height = window.innerHeight;
	//canvas.width = 1200;
	//canvas.height = 800;
	let context = canvas.getContext('2d');

	let img = new Image();
	//img.src = './timg.jpeg';
	img.src = './zq02.png';
	img.onload = function () {
		var p = context.createPattern(img, 'repeat');
		context.fillStyle = p;
		context.fillRect(0, 0, canvas.width, canvas.height);
		//context.drawImage(img, 0, 0, canvas.width, canvas.height);
	};
})();
