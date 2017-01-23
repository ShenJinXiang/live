(function() {
	let config = {
		rows: 20,
		columns: 11,
		sx: 1,
		sy: 1
	}

	let canvas = document.getElementById('canvas');
	canvas.width = config.columns * 20 + 2;
	canvas.height = config.rows * 20 + 2;
	let context = canvas.getContext('2d');

	init();

	function init() {
		let {rows, columns, sx, sy} = config;
		for (let r = 0; r < rows; r++) {
			for (let c = 0; c < columns; c++) {
				drawGrid(sx + c * 20, sy + r * 20);
			}
		}
	}

	function drawGrid(x, y) {
		context.save();
		context.translate(x, y);
		context.beginPath();
		context.moveTo(3, 3);
		context.lineTo(20 - 3, 3);
		context.lineTo(20 - 3, 20 - 3);
		context.lineTo(3, 20 - 3);
		context.lineWidth = 3;
		context.closePath();
		context.strokeStyle = 'rgba(0, 0, 0, 0.3)';
		context.stroke();

		context.beginPath();
		context.moveTo(7, 7);
		context.lineTo(20 - 7, 7);
		context.lineTo(20 - 7, 20 - 7);
		context.lineTo(7, 20 - 7);
		context.closePath();
		context.fillStyle = 'rgba(0, 0, 0, 0.3)';
		context.fill();
		context.restore();
	}
})();
