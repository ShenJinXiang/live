var Post = require('./Post');
var post = new Post();
post.setTitle('标题1');
post.setDate('2017-04-02');

console.log(post);
console.log(post.getTitle());
console.log(post.getDateStr());
