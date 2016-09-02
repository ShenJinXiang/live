var a = [];
for(var i = 0; i < 3; i++) {
	a[i] = function() {
		console.log(i);
	}
}

a[0]();
a[1]();
a[2]();
