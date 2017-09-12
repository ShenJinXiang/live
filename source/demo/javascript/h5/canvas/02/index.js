(function () {
	var canvas = document.getElementById('canvas');
	var context;
	var balls = [];
	var scale = 4;
	var prePoint = {
		x: -100,
		y: -100
	};
	var img = new Image();
	img.src = './img/04.jpeg';
	img.onload = initData;

	var imgData = [];

	function initData() {
		var _canvas = document.createElement('canvas');
		_canvas.width = img.width;
		_canvas.height = img.height;
		if (img.width != img.height) {
			alert('图片宽高应该一样的尺寸');
			return;
		}
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

	function colorStr(ball) {
		return getColorStr(getColorInfo(ball));
	}

	function getColorStr(pixel) {
		return 'rgba(' + pixel.red + ', ' + pixel.green + ', ' + pixel.blue + ', ' + pixel.alpha + ')';
	}

	function getColorInfo(ball) {
		var d = imgData[Math.round(ball.y)][Math.round(ball.x)];
		return new Pixel(d.red, d.green, d.blue, d.alpha);
	}

	function drawBall(ball) {
		context.beginPath();
		context.fillStyle = colorStr(ball);
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
				context.fillStyle = colorStr(ball);
				context.arc(ball.x, ball.y, ball.r, 0, 2 * Math.PI, false);
				if (context.isPointInPath(point.x, point.y) && !context.isPointInPath(prePoint.x, prePoint.y) && ball.r > 2) {
					var b1 = new Ball(ball.x - ball.r / 2, ball.y - ball.r / 2, ball.r / 2);
					var b2 = new Ball(ball.x - ball.r / 2, ball.y + ball.r / 2, ball.r / 2);
					var b3 = new Ball(ball.x + ball.r / 2, ball.y - ball.r / 2, ball.r / 2);
					var b4 = new Ball(ball.x + ball.r / 2, ball.y + ball.r / 2, ball.r / 2);

					drawAnimatBalls(ball, b1, b2, b3, b4);
					delete balls[i];
				}
			}
		}
		prePoint.x = point.x;
		prePoint.y = point.y;
	}

	function drawAnimatBalls(ball, b1, b2, b3, b4) {
		var timeStep = 20;
		var cnt = 0;
		var time = 10;
		var step = 0.5 * ball.r / time;
		
		var timer = setInterval(function() {
			context.clearRect(ball.x - ball.r, ball.y - ball.r, 2 * ball.r, 2 * ball.r);
			cnt++;

			context.beginPath();	
			context.fillStyle = colorStr(b1);
			context.arc(ball.x - cnt * step, ball.y - cnt * step, ball.r - cnt * step, 0, 2 * Math.PI, false);
			context.closePath();
			context.fill();

			context.beginPath();	
			context.fillStyle = colorStr(b1);
			context.arc(ball.x - cnt * step, ball.y + cnt * step, ball.r - cnt * step, 0, 2 * Math.PI, false);
			context.closePath();
			context.fill();

			context.beginPath();	
			context.fillStyle = colorStr(b1);
			context.arc(ball.x + cnt * step, ball.y - cnt * step, ball.r - cnt * step, 0, 2 * Math.PI, false);
			context.closePath();
			context.fill();
			context.beginPath();	
			context.fillStyle = colorStr(b1);
			context.arc(ball.x + cnt * step, ball.y + cnt * step, ball.r - cnt * step, 0, 2 * Math.PI, false);
			context.closePath();
			context.fill();

			if (cnt >= time) {
				clearInterval(timer);
				balls.push(b1);
				balls.push(b2);
				balls.push(b3);
				balls.push(b4);
			}
		}, timeStep);
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
	}

	function Pixel(red, green, blue, alpha) {
		this.red = red;
		this.green = green;
		this.blue = blue;
		this.alpha = alpha;
	}
})();
