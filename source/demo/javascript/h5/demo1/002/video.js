(function() {
	var config = {
		video_src: './001.mp4'
	};
	var video = document.createElement('video');
	video.src = config.video_src;
	var canvas = document.getElementById('canvas');
	var context = canvas.getContext('2d');
	var mainDiv = document.getElementById('mainDiv');
	var czDiv = document.getElementById('czDiv');
	var bfzjd = document.getElementById('bfzjd');
	var dqbfjd = document.getElementById('dqbfjd');
	var bfzt = document.getElementById('bfzt');
	var sjxx = document.getElementById('sjxx');
	var timer;

	addEvent(video, 'loadedmetadata', function() {
		canvas.width = video.videoWidth;
		canvas.height = video.videoHeight;
		czDiv.style.width = video.videoWidth + 'px';
		var duration = video.duration.toFixed(0);
	});

	/**
	addEvent(video, 'timeupdate', function() {
		setDqbfjd();
		draw();
	});
	*/

	addEvent(bfzt, 'click', function(e) {
		if (video.paused) {
			video.play();
			playVideo();
			if (!video.paused) {
				bfzt.className = 'zt';
			}
		} else {
			video.pause();
			pauseVideo();
			if(video.paused) {
				bfzt.className = 'bf';
			}
		}
		setDqbfjd();
	});


	function playVideo () {
		timer = setInterval(function() {
			setDqbfjd();
			draw();
		}, 20);
	}

	function pauseVideo () {
		if (timer) {
			clearInterval(timer);
		}
	}

	function draw() {
		context.clearRect(0, 0, canvas.width, canvas.height);
		context.drawImage(video, 0, 0, canvas.width, canvas.height);
	}


	function setDqbfjd() {
		var w = canvas.width * video.currentTime / video.duration;
		dqbfjd.style.width = w + 'px';
	}

	function addEvent(dom, eType, func) {
		if (dom.addEventListener) {
			dom.addEventListener(eType, function(e) {
				func(e);
			});
		} else if (dom.attachEvent) {
			dom.attachEvent('on' + eType, function(e) {
				func(e);
			});
		} else {
			dom['on' + eType] = function(e) {
				func(e);
			}
		}
	}

	function second2Minute(second) {
    var time = parseInt(second);
    if (time < 60) {
        return '0' + ':' + ((time < 10) ? ('0' + time) : time );
    }
    var s = (time % 60);
    s = (s < 10) ? ('0' + s) : s;
    var m = Math.floor(time / 60);
    if (time < (60 * 60)) {
        return m + ':' + s;
    }
    var h = Math.floor(m / 60);
    m = m % 60;
    m = (m < 10) ? ('0' + m) : m;
    return h + ':' + m + ':' + s;
	}
})();
