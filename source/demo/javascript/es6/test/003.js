/*
console.log(a);
console.log(b);

let a = 2;
var b = 3;

function func1 (arg) {
	let arg;
}

function func2 (arg) {
	{
		let arg;
	}
}
*/

function func1 () {
	var num = 5;
	if (true) {
		var num = 6;
	}
	console.log(num);
}

func1();

function func2 () {
	let num = 5;
	if (true) {
		let num = 6;
	}
	console.log(num);
}

func2();
