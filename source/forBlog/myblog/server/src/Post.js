const dateUtil = require('./dateUtil');
const stringUtil = require('./stringUtil');
const config = require('../config');
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
	return dateUtil.getDateStr(this.date);
};

Post.prototype.getDateYear = function () {
	return dateUtil.getDateStr(this.date, 'yyyy');
};

Post.prototype.getMonthDay = function() {
	return dateUtil.getDateStr(this.date, 'MM-dd');
};

Post.prototype.getMonth = function() {
	return dateUtil.getDateStr(this.date, 'MM');
};

Post.prototype.getDay = function() {
	return dateUtil.getDateStr(this.date, 'dd');
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

Post.prototype.getUrl = function () {
	let dirpath = config.paths.post.path;
	let _url = stringUtil.replace(dirpath, {
		category: this.getCategory(),
		year: this.getDateYear(),
		month: this.getMonth(),
		day: this.getDay(),
		title: this.getTitle()
	});
	return _url;
};

module.exports = Post;
