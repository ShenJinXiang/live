const fs = require('fs');
const markdown = require('markdown').markdown;
const fsUtil = require('./fsUtil');

let arr = fsUtil.readLines('./001.md');
console.log(arr);
