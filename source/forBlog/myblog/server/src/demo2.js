const path = require('path');
const fs = require('fs');
var mkdirs = module.exports.mkdirs = function(dirpath, mode, callback) {
	path.exists(dirpath, function(exists) {
		if(exists) {
			callback(dirpath);
		} else {
			//尝试创建父目录，然后再创建当前目录
			mkdirs(path.dirname(dirpath), mode, function(){
				fs.mkdir(dirpath, mode, callback);
			});
		}
	});
};

mkdirs('./abc/edf/eee/a');
