/**
 * id
 * title - 标题
 * dateStr - 日期
 * category - 分类
 * tags - 标签
 */
function Post(id, title, dateStr, category, tags, description, url) {
	this.id = id;
	this.title = title;

	if (dateStr && dateStr.length == 10) {
		let year = dateStr.substring(0, 4);
		let month = dateStr.substring(5, 7);
		let d = dateStr.substring(8, 10)
		let date = new Date(year, month - 1, d);
		this.date = date;
	}

	this.category = category;
	this.tags = tags;
	this.description = description;
	this.url = url;
}

Post.prototype.getId = function() {
	return this.id;
};
Post.prototype.setId = function(id) {
	this.id = id;
};

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

Post.prototype.getDateYear = function () {
	var year = this.date.getFullYear();
	return year;
};

Post.prototype.getMonthDay = function() {
	var month = this.date.getMonth() + 1;
	var d = this.date.getDate();
	month = (month > 9) ? ('' + month) : ('0' + month);
	d = (d > 9) ? ('' + d) : ('0' + d);
	return month + '-' + d;
};

Post.prototype.setCategory = function (category) {
	this.category = category;
};

Post.prototype.getCategory = function () {
	return this.category;
};

Post.prototype.setTags = function (tags) {
	this.tags = tags;
};

Post.prototype.getTags = function() {
	return this.tags;
};

Post.prototype.setDescription = function (description) {
	this.description = description;
};

Post.prototype.getDescription = function () {
	return this.description;
};

Post.prototype.setUrl = function (url) {
	this.url = url;
};

Post.prototype.getUrl = function (url) {
	return this.url;
};

module.exports = Post;
