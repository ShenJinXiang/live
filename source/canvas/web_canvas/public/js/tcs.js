(function(){
	let config = {
		rows: 20,
		columns: 20,
		sx: 3,
		sy: 3
	};

	let current = {
		score: 0,
		direction: 1,
		data: [],
		gData: [],
		isPlay: true,
		isKey: true,
		next: {},
		hasNext: false,
		interval: 400
	};

	let canvas = document.getElementById('canvas');
	canvas.width = config.rows * 20 + config.sx * 2;
	canvas.height = config.columns * 20 + config.sy * 2;
	let context = canvas.getContext('2d');

	document.body.onkeydown = function(e) {
		if (current.isKey && e.keyCode == 37 && current.direction != 1) {
			current.direction = 3;
			current.isKey = false;
		} else if (current.isKey && e.keyCode == 38 && current.direction != 2) {
			current.direction = 0;
			current.isKey = false;
		} else if (current.isKey && e.keyCode == 39 && current.direction != 3) {
			current.direction = 1;
			current.isKey = false;
		} else if (current.isKey && e.keyCode == 40 && current.direction != 0) {
			current.direction = 2;
			current.isKey = false;
		}
	}

	initData();
	initGdata();
	drawByCurrent();
	doService();

	function doService() {
		if (current.isPlay) {
			update();
			drawByCurrent();
		}
		setTimeout(doService, current.interval);
	}

	function update() {
		let firstGrid = {x: current.data[0].x, y: current.data[0].y};
		if (current.direction == 0) {
			firstGrid.y = (firstGrid.y == 0) ? (config.rows - 1) : (firstGrid.y - 1);
		} else if (current.direction == 1) {
			firstGrid.x = (firstGrid.x == config.columns - 1) ? 0: (firstGrid.x + 1);
		} else if (current.direction == 2) {
			firstGrid.y = (firstGrid.y == config.rows - 1) ? 0 : (firstGrid.y + 1);
		} else if (current.direction == 3) {
			firstGrid.x = (firstGrid.x == 0) ? (config.columns - 1) : (firstGrid.x - 1);
		}

		if (firstGrid.x == current.next.x && firstGrid.y == current.next.y) {
			current.data.unshift(firstGrid);
			current.score += 10;
			if (current.score % 100 == 0) {
				current.interval -= 50;
			}
			current.hasNext = false;
			console.log(current.interval);
		} else if (current.gData[firstGrid.x][firstGrid.y] == 1){
			alert('游戏结束, 得分：' + current.score);
			current.isPlay = false;
			clearInterval(timer);
		} else {
			current.data.unshift(firstGrid);
			current.data.pop();
		}

		initGdata();
	}

	function drawByCurrent() {
		context.clearRect(0, 0, context.canvas.width, context.canvas.height);
		let {rows, columns, sx, sy} = config;
		for (let r = 0; r < rows; r++) {
			for (let c = 0; c < columns; c++) {
				if (current.gData[c][r] == 0) {
					drawGrid(sx + c * 20, sy + r * 20, 'rgba(0, 0, 0, 0.1)');
				} else {
					drawGrid(sx + c * 20, sy + r * 20, 'rgba(0, 0, 0, 1)');
				}
			}
		}
		current.isKey = true;
	}


	function initData() {
		current.data = [
			{x: 0, y: config.rows - 4},
			{x: 0, y: config.rows - 3},
			{x: 0, y: config.rows - 2},
			{x: 0, y: config.rows - 1}
		];
	}

	function initGdata() {
		current.gData = [];
		for (let r = 0; r < config.rows; r++) {
			let arr = [];
			for (let c = 0; c < config.columns; c++) {
				arr.push(0);
			}
			current.gData.push(arr);
		}

		current.data.forEach(function (item) {
			current.gData[item.x][item.y] = 1;
		});

		setNextGrid();
	}

	function setNextGrid() {
		if (current.hasNext) {
			current.gData[current.next.x][current.next.y] = 1;
		} else {
			while (true) {
				let x = Math.floor(Math.random() * config.columns);
				let y = Math.floor(Math.random() * config.columns);
				if (current.gData[x][y] == 0) {
					current.gData[x][y] = 1;
					current.next = {x: x, y: y};
					current.hasNext = true;
					break;
				}
			}
		}
	}

	function drawGrid(x, y, v) {
		context.save();
		context.translate(x, y);
		context.beginPath();
		context.moveTo(3, 3);
		context.lineTo(20 - 3, 3);
		context.lineTo(20 - 3, 20 - 3);
		context.lineTo(3, 20 - 3);
		context.lineWidth = 3;
		context.closePath();
		context.strokeStyle = v;
		context.stroke();

		context.beginPath();
		context.moveTo(7, 7);
		context.lineTo(20 - 7, 7);
		context.lineTo(20 - 7, 20 - 7);
		context.lineTo(7, 20 - 7);
		context.closePath();
		context.fillStyle = v;
		context.fill();
		context.restore();
	}

})();
