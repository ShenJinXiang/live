(function () {
	var canvas = document.getElementById('canvas');
	var context;
	var balls = [];
	var scale = 1;
	var prePoint = {
		x: -100,
		y: -100
	};
	var img = new Image();
	img.src = './img/03.jpg';
	img.onload = initData;

	var imgData = [];

	function initData() {
		var _canvas = document.createElement('canvas');
		_canvas.width = img.width;
		_canvas.height = img.height;
		var _context = _canvas.getContext('2d');
		_context.drawImage(img, 0, 0, _canvas.width, _canvas.height);
		var data = _context.getImageData(0, 0, _canvas.width, _canvas.height).data
		var _imgData = [];
		for (var y = 0; y < img.height; y++) {
			var row = [];
			for (var x = 0; x < img.width; x++) {
				var d = img.width * y + x;
				row.push(new Pixel(data[4 * d], data[4 * d + 1], data[4 * d + 2], data[4 * d + 3]));
			}
			_imgData.push(row);
		}
		console.log(_imgData);

		for (var y = 0; y < img.height; y++) {
			var r = [];
			for (var x = 0; x < img.width; x++) {
				for (var i = 0; i < scale; i++) {
					r.push(_imgData[y][x]);
				}
			}
			for (var i = 0; i < scale; i++) {
				imgData.push(r);
			}
		}
		console.log(imgData);
		initCanvas();
	}

	function initCanvas() {
		canvas.width = scale * img.width;
		canvas.height = scale * img.height;
		context = canvas.getContext('2d');

		balls.push(new Ball(canvas.width / 2, canvas.height / 2, canvas.width / 2));
		drawBall(balls[0]);

		canvas.addEventListener('mousemove', draw, false);
	}

	function colorStr(sx, sy, ex, ey) {
		return getColorStr(getColorInfo(sx, sy, ex, ey));
	}

	function getColorStr(pixel) {
		return 'rgba(' + pixel.red + ', ' + pixel.green + ', ' + pixel.blue + ', ' + pixel.alpha + ')';
	}

	function getColorInfo(sx, sy, ex, ey) {
		var sr = 0, sg = 0, sb = 0, sa = 0, cnt = 0;
		for (var y = sy; y < ey; y++) {
			for (var x = sx; x < ex; x++) {
				cnt++;
				if (!imgData || !imgData[y] || !imgData[y][x]) {
					console.log('y -> ' + y + '  x -> ' + x);
				}
				sr += imgData[y][x]['red'];
				sg += imgData[y][x]['green'];
				sb += imgData[y][x]['blue'];
				sa += imgData[y][x]['alpha'];
			}
		}
		return new Pixel(sr / cnt, sg / cnt, sb / cnt, sa / cnt);
	}

	function drawBall(ball) {
		context.beginPath();
		context.fillStyle = colorStr(ball.sx, ball.sy, ball.ex, ball.ey);
		context.arc(ball.x, ball.y, ball.r, 0, 2 * Math.PI, false);
		context.closePath();
		context.fill();
	}

	function draw(e) {
		var point = getPointByEvent(e);

		for (var i = 0; i < balls.length; i++) {
			var ball = balls[i];
			if (ball) {
				context.beginPath();
				context.fillStyle = colorStr(ball.sx, ball.sy, ball.ex, ball.ey);
				context.arc(ball.x, ball.y, ball.r, 0, 2 * Math.PI, false);
				if (context.isPointInPath(point.x, point.y) /*&& !context.isPointInPath(prePoint.x, prePoint.y)*/ && ball.r > 2) {
					context.clearRect(ball.sx, ball.sy, 2 * ball.r, 2 * ball.r);
					var b1 = new Ball(Math.round(ball.x - ball.r / 2), Math.round(ball.y - ball.r / 2), Math.round(ball.r / 2));
					var b2 = new Ball(Math.round(ball.x - ball.r / 2), Math.round(ball.y + ball.r / 2), Math.round(ball.r / 2));
					var b3 = new Ball(Math.round(ball.x + ball.r / 2), Math.round(ball.y - ball.r / 2), Math.round(ball.r / 2));
					var b4 = new Ball(Math.round(ball.x + ball.r / 2), Math.round(ball.y + ball.r / 2), Math.round(ball.r / 2));

					drawBall(b1);
					drawBall(b2);
					drawBall(b3);
					drawBall(b4);
					balls.push(b1);
					balls.push(b2);
					balls.push(b3);
					balls.push(b4);
					delete balls[i];
				}
				context.closePath();
			}
		}
		/*
		prePoint.x = point.x;
		prePoint.y = point.y;
		*/
	}

	function getPointByEvent(e) {
		var box = canvas.getBoundingClientRect();
		var ex = e.clientX - box.left;
		var ey = e.clientY - box.top;
		return {
			x: ex,
			y: ey
		};
	}

	function Ball(x, y, r) {
		this.x = x;
		this.y = y;
		this.r = r;
		this.sx = x - r;
		this.sy = y - r;
		this.ex = x + r;
		this.ey = y + r;
	}

	function Pixel(red, green, blue, alpha) {
		this.red = red;
		this.green = green;
		this.blue = blue;
		this.alpha = alpha;
	}
})();
