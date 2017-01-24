(function() {
	let config = {
		rows: 20,
		columns: 11,
		sx: 1,
		sy: 1
	}

	let currentStatus = {
		score: 0,
		data: []
	}

	let canvas = document.getElementById('canvas');
	canvas.width = config.columns * 20 + 2 + 4 * 20 + 6;
	canvas.height = config.rows * 20 + 2;
	let context = canvas.getContext('2d');

	init();
	console.log(currentStatus.data);

	function init() {
		drawLeft();
		drawLine();
		drawRight();

		initData();
	}

	function initData() {
		let {data} = currentStatus;
		let {rows, columns} = config;
		for (let r = 0; r < rows; r++) {
			let arr = []
			for (let c = 0; c < columns; c++) {
				arr.push(0);
			}
			data.push(arr);
		}
	}

	function drawRight() {
		drawNextBox();
		drawScoreTitle();
		drawScore();
	}

	function drawScoreTitle() {
		let sx = config.columns * 20 + 6;
		let sy = 0;
		context.save();
		context.translate(sx, sy);
		context.beginPath();
		context.textBaseline = 'middle';
		context.textAlign = 'center';
		context.closePath();
		context.fillStyle = '#888';
		context.fillText('Score', 2 * 20 + 10, 2 * 20 + 10);
		context.restore();
	}

	function drawScore() {
		let sx = config.columns * 20 + 6;
		let sy = 0;
		context.save();
		context.translate(sx, sy);
		context.beginPath();
		context.textBaseline = 'middle';
		context.textAlign = 'right';
		context.fillStyle = '#666';
		context.closePath();
		context.fillText(currentStatus.score, 3 * 20 + 10, 3 * 20 + 10);
		context.restore();
	}

	function drawNextBox() {
		let sx = config.columns * 20 + 6;
		let sy = 5 * 20 + 1;
		let cs = 4, rs = 4;
		for (let r = 0; r < rs; r++) {
			for (let c = 0; c < cs; c++) {
				drawGrid(sx + c * 20, sy + r * 20);
			}
		}
	}

	function drawLine() {
		context.save();
		context.translate(config.sx, config.sy);
		context.beginPath();
		context.moveTo(config.columns * 20 + 3, 0);
		context.lineTo(config.columns * 20 + 3, context.canvas.height);
		context.lineWidth = 2;
		context.closePath();
		context.strokeStyle = "#444";
		context.stroke();
		context.restore();
	}

	function drawLeft() {
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

	let code = [
		[
			[0, 1, 0, 0],
			[0, 1, 0, 0],
			[0, 1, 0, 0],
			[0, 1, 0, 0]
		],
		[
			[0, 0, 0, 0],
			[0, 0, 0, 0],
			[1, 1, 1, 1],
			[0, 0, 0, 0]
		],
		[
			[0, 0, 0, 0],
			[0, 0, 0, 0],
			[0, 1, 0, 0],
			[1, 1, 1, 0]
		],
		[
			[0, 0, 0, 0],
			[0, 1, 0, 0],
			[0, 1, 1, 0],
			[0, 1, 0, 0]
		],
		[
			[0, 0, 0, 0],
			[0, 0, 0, 0],
			[1, 1, 1, 0],
			[0, 1, 0, 0]
		],
		[
			[0, 0, 0, 0],
			[0, 1, 0, 0],
			[1, 1, 0, 0],
			[0, 1, 0, 0]
		],
		[
			[0, 0, 0, 0],
			[1, 0, 0, 0],
			[1, 0, 0, 0],
			[1, 1, 0, 0]
		],
		[
			[0, 0, 0, 0],
			[0, 0, 0, 0],
			[1, 1, 1, 0],
			[1, 0, 0, 0]
		],
		[
			[0, 0, 0, 0],
			[1, 1, 0, 0],
			[0, 1, 0, 0],
			[0, 1, 0, 0]
		],
		[
			[0, 0, 0, 0],
			[0, 0, 0, 0],
			[0, 0, 1, 0],
			[1, 1, 1, 0]
		]
	];

})();
