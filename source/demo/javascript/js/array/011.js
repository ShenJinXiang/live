var arr = ['ant', 'Bug', 'cat', 'Dog'];
arr.sort();
console.log(arr);
arr.sort(function(s, t){
	var s1 = s.toLowerCase();
	var t1 = t.toLowerCase();
	if(s1 < t1) return -1;
	if(s1 > t1) return 1;
	return 0;
});
console.log(arr);
