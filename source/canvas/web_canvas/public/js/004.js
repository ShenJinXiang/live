(function(){
		let config = {
			gridWidth: 35,
			sx: 50,
			sy: 50,
			pieceRadius: 15
		};
		let pieceStatus = -1;
		let logArr = [];
		let data = [];
		let isPlay = true;

		let canvas = document.getElementById('canvas');
		canvas.width = 590;
		canvas.height = 590;
		let context = canvas.getContext('2d');

		let resetBtn = document.getElementById('resetBtn');
		resetBtn.onclick = clear;

		let backBtn = document.getElementById('backBtn');
		backBtn.onclick = back;

		let logBtn = document.getElementById('logBtn');
		logBtn.onclick = showLog;


		canvas.onclick = function (e) {
			if (isPlay) {
				let canvasBox = canvas.getBoundingClientRect();
				let result = canvasClick(e.clientX - canvasBox.left, e.clientY - canvasBox.top, pieceStatus);
				if (result) {
					pieceStatus = -pieceStatus;
				}
			}
		};
		
		initData();
		drawChessboard();


		/**
		 * 绘制棋盘
		 */
		function drawChessboard () {
			drawBack();
			drawLines();
			drawStarts();

			function drawBack() {
				context.strokeRect(config.sx - 25, config.sy - 25, config.gridWidth * 14 + 50, config.gridWidth * 14 + 50);
				context.fillStyle = "#F0CA65";
				context.fillRect(config.sx - 25, config.sy - 25, config.gridWidth * 14 + 50, config.gridWidth * 14 + 50);
			}

			/**
			 * 绘制棋盘线条
			 */
			function drawLines() {
				let width = config.gridWidth;
				context.save();
				context.translate(config.sx, config.sy);
				for (let i = 0; i < 15; i++) {
					context.beginPath();
					context.moveTo(0, i * width);
					context.lineTo(14 * width, i * width);
					if ([0, 3, 7, 11, 14].indexOf(i) >= 0) {
						context.strokeStyle = '#444';
					} else {
						context.strokeStyle = '#888';
					}
					context.stroke();
					context.closePath();

					context.beginPath();
					context.moveTo(i * width, 0);
					context.lineTo(i * width, 14 * width);
					if ([0, 3, 7, 11, 14].indexOf(i) >= 0) {
						context.strokeStyle = '#444';
					} else {
						context.strokeStyle = '#888';
					}
					context.stroke();
					context.closePath();
				}
				context.restore();
			}

			/**
			 * 绘制棋盘上的星
			 */
			function drawStarts() {
				drawStart(3, 3);
				drawStart(3, 11);
				drawStart(11, 11);
				drawStart(11, 3);
				drawStart(7, 7);

				function drawStart(x, y) {
					let width = config.gridWidth;
					context.beginPath();
					context.save();
					context.translate(config.sx + x * width, config.sy + y * 35);
					context.arc(0, 0, 3, 0, Math.PI * 2, false);
					context.fillStyle = "#333";
					context.fill();
					context.restore();
					context.closePath();
				}
			}
		}
		
		/**
		 * 绘制棋子
		 */
		function drawPiece(x, y, val) {
			context.beginPath();
			context.save();
			context.translate(config.sx + config.gridWidth * x, config.sy + config.gridWidth * y);
			context.arc(0, 0, config.pieceRadius, 0, 2 * Math.PI, false);
			if(val > 0) {
				context.fillStyle = "#ddd";
			} else {
				context.fillStyle = "#333";
			}
			context.fill();
			context.restore();
			context.closePath();
		}

		function clear() {
			context.clearRect(0, 0, context.canvas.width, context.canvas.height);
			drawChessboard();
			initData();
			logArr = [];
			let log = document.getElementById('log');
			log.innerHTML = '';
		}

		function canvasClick(x, y, val) {
			let minX = config.sx - 25;
			let minY = config.sy - 25;
			let max = config.gridWidth * 14 + 75;
			if (x < minX || x > max || y < minY || y > max) {
				return false;
			}
			x -= config.sx;
			y -= config.sy;
			let pieceX = Math.round(x / config.gridWidth);
			let pieceY = Math.round(y / config.gridWidth);
			if (data[pieceX][pieceY] != 0) {
				return false;
			}
			drawPiece(pieceX, pieceY, val);
			doLog(pieceX, pieceY, val);
			data[pieceX][pieceY] = val;
			check(val);
			return true;

			function doLog(x, y, val) {
				logArr.push({
						x: x,
						y: y,
						val: val,
						text: ((val > 0) ? "白方：" : "黑方：") + 'x - ' + (x + 1) + ', y - ' + (y + 1)
				});
				let log = document.getElementById('log');
				log.innerHTML += '<li>' + logArr[logArr.length - 1].text + '</li>';
			}
		}

		function check(val) {
			for (let i = 0; i < 15; i++) {
				for (let j = 0; j < 15; j++) {
					let mini = i - 2, minj = j - 2;
					mini = (i <= 2) ? 0 : mini;
					mini = (i == 13) ? (i - 3) : mini;
					mini = (i == 14) ? (i - 4) : mini;
					minj = (j <= 2) ? 0 : minj;
					minj = (j == 13) ? (j - 3) : minj;
					minj = (j == 14) ? (j - 4) : minj;
					let n1 = Math.abs(data[mini][j] + data[mini + 1][j] + data[mini + 2][j] + data[mini + 3][j] + data[mini + 4][j]); // |
					let n2 = Math.abs(data[i][minj] + data[i][minj + 1] + data[i][minj + 2] + data[i][minj + 3] + data[i][minj + 4]); // -
					let n3 = Math.abs(data[mini][minj] + data[mini + 1][minj + 1] + data[mini + 2][minj + 2] + data[mini + 3][minj + 3] + data[mini + 4][minj + 4]); // \
					let n4 = Math.abs(data[mini][minj + 4] + data[mini + 1][minj + 3] + data[mini + 2][minj + 2] + data[mini + 3][minj + 1] + data[mini + 4][minj]);  // /
					if (n1 == 5 || n2 == 5 || n3 == 5 || n4 == 5) {
						alert((val > 0 ? "白方" : "黑方") + "胜利！");
						isPlay = false;
						return;
					}
				}
			}
		}

		function initData() {
			data = [];
			for (let i = 0; i < 15; i++) {
				let r = [];
				for (let j = 0; j < 15; j++) {
					r.push(0);
				}
				data.push(r);
			}
			isPlay = true;
			pieceStatus = -1;
		}

		function back() {
			if (isPlay) {
				logArr.pop();
				doPlayByLog();
			}

			function doPlayByLog() {
				context.clearRect(0, 0, context.canvas.width, context.canvas.height);
				drawChessboard();
				initData();
				let log = document.getElementById('log');
				logArr.forEach(function(item) {
					drawPiece(item.x, item.y, item.val);
					data[item.x][item.y] = item.val;
					log.innerHTML += '<li>' + item.text + '</li>';
					pieceStatus = -pieceStatus;
				});
			}
		}

		function showLog() {
			if (!isPlay) {
				context.clearRect(0, 0, context.canvas.width, context.canvas.height);
				drawChessboard();
				let i = 0;
				let timer = setInterval(function(){
					debugger
					if (i >= logArr.length) {
						clearInterval(timer);
						alert('播放完毕');
					}
					drawPiece(logArr[i].x, logArr[i].y, logArr[i].val);
					i++;
				}, 1000);
			}
		}
})();
