var os = require("os");
var rls = require('./readLines');
var wf = require('./writeFile');

rls('./ATCC11842.gff3', function(data){
	console.log(data);
	var result = [];
	for(var i = 0; i < data.length; i++) {
		var line = data[i];
		if(line.indexOf('NC_') == -1) {
			result.push(line);
		} else {
			if(line.indexOf("Name=") != line.lastIndexOf("Name=")) {
				var line1 = line.substring(0, line.lastIndexOf("Name="));
				var line2 = (line.indexOf(";", line.lastIndexOf("Name=") + 1) == -1) ? "" :line.substring(line.indexOf(";", line.lastIndexOf("Name=") + 1));
				result.push(line1 + line2);
			} else {
				result.push(line);
			}
		}
	}
	wf(result, './result.txt');
});
