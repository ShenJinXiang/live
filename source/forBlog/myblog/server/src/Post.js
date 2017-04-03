function Post() {
}

Post.prototype.getTitle = function () {
	return this.title;
};

Post.prototype.setTitle = function (title) {
	this.title = title;
};

Post.prototype.setDate = function (dateStr) {
	if (dateStr.length != 10) {
		return;
	}
	var year = dateStr.substring(0, 4);
	var month = dateStr.substring(5, 7);
	var d = dateStr.substring(8, 10)
	var date = new Date(year, month - 1, d);
	this.date = date;
};

Post.prototype.getDateStr = function () {
	var year = this.date.getFullYear();
	var month = this.date.getMonth() + 1;
	var d = this.date.getDate();
	month = (month > 9) ? ('' + month) : ('0' + month);
	d = (d > 9) ? ('' + d) : ('0' + d);
	return year + '-' + month + '-' + d;
};

module.exports = Post;
