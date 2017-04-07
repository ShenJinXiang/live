const path = require('path');
const config = require('../config');
const fsUtil = require('./fsUtil');
const stringUtil = require('./stringUtil');

let indexHtml = function() {
	let html = fsUtil.readFile(path.join(__dirname, '/template/index.html'));
	return html;
};

let menuHtml = function(type) {
	let html = fsUtil.readFile(path.join(__dirname, `/template/menu${type}.html`));
	return html;
};

let pageHtml = function() {
	let html = fsUtil.readFile(path.join(__dirname, '/template/page.html'));
	return html;
};

let postsHtml = function() {
	let html = fsUtil.readFile(path.join(__dirname, '/template/posts.html'));
	return html;
};

let pageBtnsHtml = function() {
	let html = fsUtil.readFile(path.join(__dirname, '/template/pageBtns.html'));
	return html;
};

let pageBtnHtml = function() {
	let html = fsUtil.readFile(path.join(__dirname, '/template/pageBtn.html'));
	return html;
};

let pagesHtml = function(posts) {
	let indexContent = indexHtml();
	let menu1Content = menuHtml(1);
	let pageContent = pageHtml();
	let postsContent = postsHtml();
	let pageBtnsContent = pageBtnsHtml();
	let pageBtnContent = pageBtnHtml();
	let totalPage = Math.ceil(posts.length / config.pageSize);
	for(let i = 1; i <= totalPage; i++) {
		asPageHtml(i);
	}

	
	function asPageHtml(pageNum) {
		let dirpath;
		if (pageNum === 1) {
			dirpath = path.join(process.cwd(), config.paths.home.path);
		} else {
			let _path = stringUtil.replace(config.paths.page.path, {pageNum: pageNum});
			dirpath = path.join(process.cwd(), _path);
		}
		let postArr = posts.slice((pageNum - 1) * config.pageSize, pageNum * config.pageSize);
		let _postshtml = [];
		postArr.forEach(function(post){
			let tagsHtml = [];
			let tags = post.tags;
			tags.forEach(function(tag) {
			//	<a href='#tags#'>#tag#</a>
				tagsHtml.push('<a href="/pages/archives/tags/' + tag + '">' + tag + '</a>');
			});
			let _postsContent = stringUtil.replace(postsContent, {
				title: post.title,
				url: post.getUrl(),
				description: post.description,
				date: post.getDateStr(),
				category: post.category,
				tags: tagsHtml.join(' ')
			});
			_postshtml.push(_postsContent);
		});

		let preBtn = stringUtil.replace(pageBtnContent, {
			topage: 'pre',
			href: ((pageNum == 2) ? config.paths.home.path : (stringUtil.replace(config.paths.page.path, {pageNum: pageNum - 1}))),
			pageText: '上一页'
		});
		let nextBtn = stringUtil.replace(pageBtnContent, {
			topage: 'next',
			href: stringUtil.replace(config.paths.page.path, {pageNum: pageNum + 1}),
			pageText: '下一页'
		}); 
		if (pageNum == 1) {
			preBtn = '';
		}
		if (pageNum == totalPage) {
			nextBtn = '';
		}
		let pageBtns = stringUtil.replace(pageBtnsContent, {prePageBtn: preBtn, nextPageBtn: nextBtn});
		let _pageContent = stringUtil.replace(pageContent, {page: _postshtml.join(''), pagebtns: pageBtns});
		let html = stringUtil.replace(indexContent, {title: config.title, description: config.description, menu: menu1Content, main: _pageContent});
		fsUtil.writeFile(dirpath, html);
	}
	
}

exports.indexHtml = indexHtml;
exports.pagesHtml = pagesHtml;
