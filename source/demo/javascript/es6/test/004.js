/*
function f() {
	console.log('outside');
}

(function () {
	if (false) {
		function f() {
			console.log('inside');
		}
	}
	f();
})();
*/
'use strict';
function f() { console.log('I am outside!'); }
(function () {
  if (false) {
  function f() { console.log('I am inside!'); }
  }
  f();
}());
