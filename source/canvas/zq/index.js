(function() {
	let canvas = document.getElementById('canvas');
	canvas.width = window.innerWidth;
	canvas.height = window.innerHeight;
	let context = canvas.getContext('2d');

	let img = new Image();
	img.src = './timg.jpeg';
	img.onload = function () {
		var p = context.createPattern(img, 'repeat');
		context.fillStyle = p;
		context.fillRect(0, 0, canvas.width, canvas.height);
	};
})();
