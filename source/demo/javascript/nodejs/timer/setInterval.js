var count = 0;
var timer = setInterval(function(){
	console.log(count++);
	if(count >= 10){
		clearInterval(timer);
	}
}, 1000 * 1);
