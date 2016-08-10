scope = 'global';
function constructFunction() {
	var scope = 'local';
	return new Function('return scope;');
}

console.log(constructFunction()());
