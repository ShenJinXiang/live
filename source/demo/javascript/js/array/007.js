var a = [1, 2, 3, 4, 5, 6];
for(var i = 0 ; i < a.length; i++) {
	console.log(i + ' : ' + a[i]);
}
console.log("--------------------------");

delete a[2];
for(var i = 0 ; i < a.length; i++) {
	if(!a[i]) continue;
	console.log(i + ' : ' + a[i]);
}

console.log("--------------------------");

a[3] = undefined;
for(var i = 0; i < a.length; i++) {
	if(!(i in a)) continue;
	console.log(i + ' : ' + a[i]);
}

console.log("--------------------------");
for(var i in a) {
	console.log(i + ' : ' + a[i]);
}
