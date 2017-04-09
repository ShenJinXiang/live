const path = require('path');
const fsUtil = require('./fsUtil');
const Post = require('./Post');
const asPost = require('./asPost');

console.log(asPost.fileList());
asPost.asPost('001.md');
