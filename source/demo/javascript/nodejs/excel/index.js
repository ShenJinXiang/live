var xl = require('node-xlsx');
var data = xl.parse('./001.xlsx');
console.log(data);
console.log(data[0].data);
