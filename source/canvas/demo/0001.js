(function(){
	let canvas = document.getElementById('canvas');
	canvas.width = 500;
	canvas.height = 500;
	let context = canvas.getContext('2d');
	let gradient = context.createLinearGradient(100, 100, 400, 400);
	gradient.addColorStop(0, '#ccc');
	gradient.addColorStop(0.5, '#084');
	gradient.addColorStop(1, '#333');
	context.fillStyle = gradient;
	context.fillRect(100, 100, 300, 300);
})();
