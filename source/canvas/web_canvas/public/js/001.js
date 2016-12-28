(function () {
	let canvas = document.getElementById('canvas');
	canvas.width = 600;
	canvas.height = 600;
	let context = canvas.getContext('2d');
	context.fillStyle = 'red';
	context.fillRect(100, 100, 300, 300);
})();
