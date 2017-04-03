const Post = require('./Post');

let post1 = new Post();
post1.setId(1);
post1.setDate("2017-04-02");
post1.setTitle('标题1');
console.log(post1 + 'year:' + post1.getDateYear() + ' monthday:' + post1.getMonthDay());

let post2 = new Post();
post2.setId(2);
post2.setDate("2017-04-02");
post2.setTitle('标题2');
console.log(post2 + 'year:' + post2.getDateYear() + ' monthday:' + post2.getMonthDay());

let post3 = new Post();
post3.setId(3);
post3.setDate("2017-04-02");
post3.setTitle('标题3');
console.log(post3 + 'year:' + post3.getDateYear() + ' monthday:' + post3.getMonthDay());

let post4 = new Post();
post4.setId(4);
post4.setDate("2017-04-02");
post4.setTitle('标题4');
console.log(post4 + 'year:' + post4.getDateYear() + ' monthday:' + post4.getMonthDay());

console.log("--------------");
let arr = [post1, post3, post2, post4];
console.log(arr);
arr.sort(function(a, b) {
	return b.getId() > a.getId();
});

console.log(arr);
