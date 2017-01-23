(function() {
	let config = {
		width: 600,
		height: 600,
		background: '#444',
		tj: {
			x: 300,
			y: 300,
			radius: 200,
			xsRadius: 200 / 6,
			/*
			darkColor: '#002b36',
			lightColor: '#fdf6e3',
			*/
			darkColor: '#000',
			lightColor: '#fff',
			rotate: 0
		}
	};

	let canvas = document.getElementById('canvas');
	canvas.width = config.width;
	canvas.height = config.height;
	let context = canvas.getContext('2d');

	setInterval(function () {
		draw(config.tj);
		update(config.tj);
	}, 20);

	function draw (tj) {
		context.clearRect(0, 0, canvas.width, canvas.height);
		
		context.beginPath();
		context.fillStyle = config.background;
		context.fillRect(0, 0, canvas.width, canvas.height);
		context.closePath();

		context.save();
		context.translate(tj.x, tj.y);
		context.rotate(tj.rotate);

		context.beginPath();
		context.arc(0, 0, tj.radius, 0, Math.PI, false);
		context.arc(tj.radius / -2, 0, tj.radius / 2, Math.PI, 2 * Math.PI, false);
		context.arc(tj.radius / 2, 0, tj.radius / 2, Math.PI, 2 * Math.PI, true);
		context.fillStyle = tj.darkColor;
		context.fill();
		context.closePath();

		context.beginPath();
		context.arc(0, 0, tj.radius, 0, Math.PI, true);
		context.arc(tj.radius / -2, 0, tj.radius / 2, Math.PI, 2 * Math.PI, false);
		context.arc(tj.radius / 2, 0, tj.radius / 2, Math.PI, 2 * Math.PI, true);
		context.fillStyle = tj.lightColor;
		context.fill();
		context.closePath();
		
		context.beginPath();
		context.arc(tj.radius / -2, 0, tj.xsRadius, 0, 2 * Math.PI, false);
		context.fillStyle = tj.lightColor;
		context.fill();
		context.closePath();

		context.beginPath();
		context.arc(tj.radius / 2, 0, tj.xsRadius, 0, 2 * Math.PI, false);
		context.fillStyle = tj.darkColor;
		context.fill();
		context.closePath();

		context.restore();
	}

	function update (tj) {
		config.tj.rotate += 0.15;
	}


})();
