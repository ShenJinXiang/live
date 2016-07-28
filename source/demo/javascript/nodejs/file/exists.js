var fs = require('fs');

fs.exists('./encoding.js', function(exists){
  console.log(exists ? '存在' : '不存在');
});

console.log(fs.existsSync('./encoding.js'));
