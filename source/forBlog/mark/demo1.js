const os = require('os');
const fs = require('fs');
const markdown = require('markdown').markdown;
const fsUtil = require('./fsUtil');

let arr = fsUtil.readLines('./001.md');
let html = markdown.toHTML(arr.join(os.EOL));
console.log(html.split('\n'));
