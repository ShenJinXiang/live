(function () {
	let canvas = document.getElementById('canvas');
	canvas.width = 1000;
	canvas.height = 800;
	let context = canvas.getContext('2d');


	var balls = [];
	
	let count = 0;
	let config = {
		vx: -1,
		vy: -1
	};

	setInterval(function () {
		draw();
		update();
	}, 50);

	function draw() {
		console.log(balls.length);
		context.clearRect(0, 0, canvas.width, canvas.height);
		let clg = context.createLinearGradient(canvas.width / 2, 0, canvas.width / 2, canvas.height);
		clg.addColorStop(0, 'rgb(7, 9, 13)');
		clg.addColorStop(1, 'rgb(0, 14, 44)');
		context.fillStyle = clg;
		context.fillRect(0, 0, canvas.width, canvas.height);
		for (let i = 0; i < balls.length; i++) {
			context.beginPath();
			context.fillStyle = '#fff';
			context.arc(balls[i].x, balls[i].y, balls[i].r, 0, 2 * Math.PI, false);
			context.fill();
		}
	}

	function update() {
		for (let i = 0; i < balls.length; i++) {
			balls[i].x += config.vx;
			balls[i].y += config.vy;
		}
		count++;

		if (count > 50) {
			for (let i = 0; i < 10; i++) {
				balls.push({
					x: Math.random() * canvas.width * 2,
					y: Math.random() * 10 + canvas.height,
					r: Math.random() * 3
				});
			}
			count = 0;
		}

		let cnt = 0;
		for (let i = 0; i < balls.length; i++) {
			if (balls[i].y > 0) {
				balls[cnt++] = balls[i];
			}
		}
		while(balls.length > cnt) {
			balls.pop();
		}
	}
})();
