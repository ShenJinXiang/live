/*
var ev = require('./eventUtil');

var o = new ev();
function abc(cb) {
	o.on('success', cb);
}


console.log('111');
abc(function(){
	console.log('333');
})
console.log('222');

//.........
var t = new Date().getTime();

while(new Date().getTime() - t < 3000) {
}
o.emit('success');

*/

/*
var addBtn = document.getElementById('add');
console.log('111');
add.addEventListener(function() {
});

console.log('222');
*/

console.log('111');
$.ajax({
		url: '',
		data: {},
		success: function() {
		}, 
		error: function () {
		}
});
console.log('222');
