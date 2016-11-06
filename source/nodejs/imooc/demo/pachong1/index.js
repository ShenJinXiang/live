var http = require('http');
var cheerio = require('cheerio');

var url = 'http://www.imooc.com/learn/601';

function trim (str) {
	str = str.replace(/^\s+|\s+$/g, '');
	return str;
}

http.get(url, function (res) {
	var html = '';
	res.on('data', function (data) {
		html += data;
	});

	res.on('end', function () {
		var $ = cheerio.load(html);
		var obj = [];
		var zj = $('.mod-chapters .chapter');
		for (var index = 0; index < zj.length; index++) {
			var o = {};
			o.title = trim(zj.eq(index).find('h3').text());
			o.children = [];
			var childs = zj.eq(index).find('.video li');
			for (var j = 0; j < childs.length; j++) {
				var oc = {};
				oc.id = childs.eq(j).attr('data-media-id');
				oc.href = childs.eq(j).find('a').attr('href');
				oc.title = trim(childs.eq(j).find('a').text());
				o.children.push(oc);
			}
			obj.push(o);

		}

		
		obj.forEach(function (item, index) {
			console.log('');
			console.log(item.title);
			item.children.forEach(function(child, jndex) {
				console.log('    ' + child.id + '    ' + child.title + '    ' + child.href);
				//console.log(child);
			});
		});
	});
}).on('error', function() {
	console.error('get url:', url, 'error..');
});

