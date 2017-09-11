(function() {
	var count = 0;
	var canvas = document.getElementById('canvas');
	canvas.width = 800;
	canvas.height = 800;
	var context = canvas.getContext('2d');

	var isFixedColor = false;
	var fixedColor = '#aaa';

	var init = {
		x: canvas.width / 2,
		y: canvas.height / 2,
		r: canvas.width/ 2,
		c: '#058',
	}

	var prexy = {
		ex: -100,
		ey: -100
	}
	var box = canvas.getBoundingClientRect();
	var balls = [init];

	drawBall(init);
	canvas.addEventListener('mousemove', draw, false);

	function draw(e) {
		var ex = -100;
		var ey = -100;
		if (e) {
			ex = e.clientX - box.left;
			ey = e.clientY - box.top;
		}
		for (var i = 0; i < balls.length; i++) {
			var ball = balls[i];
			if (ball) {
				context.beginPath();
				context.fillStyle = isFixedColor ? fixedColor : ball.c;
				context.arc(ball.x, ball.y, ball.r, 0, 2 * Math.PI, false);
				context.closePath();
				if (context.isPointInPath(ex, ey) && !context.isPointInPath(prexy.ex, prexy.ey)) {
					context.clearRect(ball.x - ball.r, ball.y - ball.r, 2 * ball.r, 2 * ball.r);
					var b1 = {x: ball.x - ball.r / 2, y: ball.y - ball.r / 2, r: ball.r / 2, c: getRandomColor()};
					var b2 = {x: ball.x - ball.r / 2, y: ball.y + ball.r / 2, r: ball.r / 2, c: getRandomColor()};
					var b3 = {x: ball.x + ball.r / 2, y: ball.y - ball.r / 2, r: ball.r / 2, c: getRandomColor()};
					var b4 = {x: ball.x + ball.r / 2, y: ball.y + ball.r / 2, r: ball.r / 2, c: getRandomColor()};
					drawBall(b1);
					drawBall(b2);
					drawBall(b3);
					drawBall(b4);
					balls.push(b1);
					balls.push(b2);
					balls.push(b3);
					balls.push(b4);
					delete balls[i];
				} /*else {
						context.fill();
				} */
			}
		} 
		prexy.ex = ex;
		prexy.ey = ey;
	}

	function drawBall(ball) {
		context.beginPath();
		context.fillStyle = isFixedColor ? fixedColor : ball.c;
		context.arc(ball.x, ball.y, ball.r, 0, 2 * Math.PI, false);
		context.closePath();
		context.fill();
		console.log(count++);
	}

	function getRandomColor() {
		var r = Math.ceil(Math.random() * 255);
		var g = Math.ceil(Math.random() * 255);
		var b = Math.ceil(Math.random() * 255);
		return 'rgb(' + r + ',' + g + ',' + b + ')';
	}
})();
