const path = require('path');
const fsUtil = require('./fsUtil');

/**
 * 整个模板
 * title 标题
 * description 副标题
 * menu 菜单
 * main 主内容
 */
let index = fsUtil.readFile(path.join(__dirname, '/template/index.html'));

/**
 * 菜单
 */
let menu0 = fsUtil.readFile(path.join(__dirname, '/template/menu0.html'));
let menu1 = fsUtil.readFile(path.join(__dirname, '/template/menu1.html'));
let menu2 = fsUtil.readFile(path.join(__dirname, '/template/menu2.html'));
let menu3 = fsUtil.readFile(path.join(__dirname, '/template/menu3.html'));

/**
 * 分页
 * page
 * pagebtns
 */
let page = fsUtil.readFile(path.join(__dirname, '/template/page.html'));

/**
 * 文章
 * url
 * title
 * description
 * date
 * category
 * tags
 */
let posts = fsUtil.readFile(path.join(__dirname, '/template/posts.html'));

/**
 * 上一页、下一页按钮组
 * prePageBtn
 * nextPageBtn
 */
let pageBtns = fsUtil.readFile(path.join(__dirname, '/template/pageBtns.html'));

/**
 * 上一页或下一页按钮
 * topage
 * href
 * pageText
 */
let pageBtn = fsUtil.readFile(path.join(__dirname, '/template/pageBtn.html'));
