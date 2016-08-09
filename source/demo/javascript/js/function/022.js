function bind(f, o) {
	if(f.bind){
		return f.bind(o);
	} else return function() {
		return f.apply(o, arguments);
	};
}

function f1(xx) {
	this.x + xx;
}

var obj = {x : 4};

var g = bind(f1, obj);

console.log(g);
