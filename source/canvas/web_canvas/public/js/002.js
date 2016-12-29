(function () {
		let canvas = document.getElementById('canvas');
		canvas.width = 600;
		canvas.height = 600;
		let context = canvas.getContext('2d');
		//context.fillStyle = "#002b36";
		//context.fillRect(100, 100, 400, 400);
		context.fillStyle = "#000";
		context.fillRect(0, 0, canvas.width, canvas.height);
		drawTJ();

		function drawTJ() {
			/*
			context.beginPath();
			context.arc(300, 300, 102, 0, 2 * Math.PI, false);
			context.lineWidth = 6;
			context.strokeStyle = "#002b36";
			context.stroke();
			context.closePath();
			*/
			
			context.beginPath();
			context.arc(300, 300, 100, 0, Math.PI, false);
			context.arc(250, 300, 50, Math.PI, 2 * Math.PI, false);
			context.arc(350, 300, 50, Math.PI, 2 * Math.PI, true);
			context.fillStyle = "#002b36";
			context.fill();
			context.closePath();

			context.beginPath();
			context.arc(300, 300, 100, 0, Math.PI, true);
			context.arc(250, 300, 50, Math.PI, 2 * Math.PI, false);
			context.arc(350, 300, 50, Math.PI, 2 * Math.PI, true);
			context.fillStyle = "#fdf6e3";
			context.fill();
			context.closePath();

			context.beginPath();
			context.arc(250, 300, 15, 0, 2 * Math.PI, false);
			context.fillStyle = "#fdf6e3";
			context.fill();
			context.closePath();

			context.beginPath();
			context.arc(350, 300, 15, 0, 2 * Math.PI, false);
			context.fillStyle = "#002b36";
			context.fill();
			context.closePath();
		}


})();
