(function(){
	var author = {
		name: 'shenjinxiang',
		sex: 1,
		age: 30,
		address: "太原"
	};
	var config = {
		"server_host": "192.168.253.221",
		"server_port": 8888,
		"server_name": "/csfw_jiekou",
		"port": 4444,
		"key": "12345670",
		"jiekous": [
			{
				"key": "token",
				"title": "获取token",
				"url": "/common/queryToken",
				"params": ["jqbh"]
			},
			{
				"key": "tsPage",
				"title": "每日听税分页查询",
				"url": "/hyfw/ts/tsPage",
				"params": ["jqbh", "token", "pageNum", "pageSize", "sort"]
			},
			{
				"key": "tsDetail",
				"title": "每日听税详情",
				"url": "/hyfw/ts/tsDetail",
				"params": ["jqbh", "token", "id", "userid"]
			},
			{
				"key": "login",
				"title": "登录",
				"url": "/user/login",
				"params": ["jqbh", "token", "username", "password"]
			},
			{
				"key": "tjPage",
				"title": "首页推荐分页查询",
				"url": "/tj/tjPage",
				"params": ["jqbh", "token", "pageNum", "pageSize"]
			},
			{
				"key": "cszxTypeList",
				"title": "财税咨询分类列表",
				"url": "/cszx/cszxTypeList",
				"params": ["jqbh", "token"]
			},
			{
				"key": "cszx",
				"title": "财税咨询（最新和大家都在看）分页查询",
				"url": "/cszx/cszxList",
				"params": ["jqbh", "token", "pageNum", "pageSize", "sort", "type"]
			},
			{
				"key": "cszxMine",
				"title": "财税咨询（我的咨询）分页查询",
				"url": "/cszx/cszxListMine",
				"params": ["jqbh", "token", "pageNum", "pageSize", "userid"]
			},
			{
				"key": "zxzj",
				"title": "财税咨询-咨询专家",
				"url": "/cszx/zxzj",
				"params": ["jqbh", "token", "userid", "type", "content"]
			},
			{
				"key": "cszxDetail",
				"title": "财税咨询详情",
				"url": "/cszx/cszxDetail",
				"params": ["jqbh", "token", "id"]
			},
			{
				"key": "zbkcYgList",
				"title": "直播课程预告查询",
				"url": "/article/zbkcYgList",
				"params": ["jqbh", "token", "pageNum", "pageSize"]
			},
			{
				"key": "zbkcLsList",
				"title": "直播课程历史查询",
				"url": "/article/zbkcLsList",
				"params": ["jqbh", "token", "pageNum", "pageSize"]
			},
			{
				"key": "wlkcDjList",
				"title": "网络课程等级列表",
				"url": "/wlkc/wlkcDjList",
				"params": ["jqbh", "token"]
			},
			{
				"key": "wlkcPage",
				"title": "网络课程分页查询",
				"url": "/wlkc/wlkcPage",
				"params": ["jqbh", "token", "pageNum", "pageSize", "flfs", "dj", "sort"]
			},
			{
				"key": "fxList",
				"title": "风险查询页",
				"url": "/article/fxList",
				"params": ["jqbh", "token","pageNum","pageSize", "cid"]
			},
			{
				"key": "swList",
				"title": "实务查询页",
				"url": "/article/swList",
				"params": ["jqbh", "token", "pageNum","pageSize", "cid"]
			},
			{
				"key": "fgflList",
				"title": "法规分类",
				"url": "/article/queryFgFlList",
				"params": ["jqbh", "token"]
			},
			{
				"key": "fgszList",
				"title": "法规税种",
				"url": "/article/queryFgSzList",
				"params": ["jqbh", "token"]
			},
			{
				"key": "fgList",
				"title": "法规查询页",
				"url": "/article/fgList",
				"params": ["jqbh", "token", "pageNum","pageSize", "cid", "szid", "rq"]
			},
			{
				"key": "queryFgList",
				"title": "法规查询页[传入id]",
				"url": "/article/queryFgList",
				"params": ["jqbh", "token", "pageNum","pageSize","id"]
			},
			{
				"key": "jdList",
				"title": "解读查询页",
				"url": "/article/jdList",
				"params": ["jqbh", "token", "pageNum","pageSize"]
			},
			{
				"key": "qkList",
				"title": "期刊查询页",
				"url": "/article/qkList",
				"params": ["jqbh", "token", "pageNum","pageSize"]
			},
			{
				"key": "ztpage",
				"title": "专题分页查询",
				"url": "/csrd/ztPage",
				"params": ["jqbh", "token", "pageNum","pageSize"]
			},
			{
				"key": "articleIndex",
				"title": "通用文章详情页",
				"url": "/article/articleIndex",
				"params": ["jqbh", "token", "id", "userid"]
			},
			{
				"key": "queryArticleMetaInfo",
				"title": "获取点赞收藏信息",
				"url": "/common/queryArticleMetaInfo",
				"params": ["jqbh", "token", "type", "article_id"]
			},
			{
				"key": "optArticle",
				"title": "点赞/收藏操作",
				"url": "/common/optArticle",
				"params": ["jqbh", "token", "type", "article_id", "optionname"]
			},
			{
				"key": "tjPinglun",
				"title": "提交评论信息",
				"url": "/common/tjPinglun",
				"params": ["jqbh", "token", "type", "article_id", "content"]
			},
			{
				"key": "queryPinglunData",
				"title": "查询评论信息",
				"url": "/common/queryPinglunData",
				"params": ["jqbh", "token", "pageNum", "pageSize", "type", "article_id"]
			},
			{
				"key": "searchpage",
				"title": "按模块查询",
				"url": "/common/searchPage",
				"params": ["jqbh", "token", "pageNum", "pageSize", "type", "search"]
			},
			{
				"key": "wodesc",
				"title": "我的收藏分页查询",
				"url": "/common/wdscPage",
				"params": ["jqbh", "token", "pageNum", "pageSize", "userid"]
			},
			{
				"key": "searchList",
				"title": "查询列表",
				"url": "/common/searchList",
				"params": ["jqbh", "token", "pageNum", "pageSize", "search"]
			},
			{
				"key": "gjxUrl",
				"title": "工具链接地址",
				"url": "/gjx/gjxUrl",
				"params": ["jqbh", "token"]
			},
			{
				"key": "gjx_swgjPage",
				"title": "工具箱-实务工具",
				"url": "/gjx/swgjPage",
				"params": ["jqbh", "token", "pageNum", "pageSize"]
			},
			{
				"key": "gjx_fghbPage",
				"title": "工具箱-法规汇编",
				"url": "/gjx/fghbPage",
				"params": ["jqbh", "token", "pageNum", "pageSize"]
			},
			{
				"key": "gjx_dyjhPage",
				"title": "工具箱-答疑解惑",
				"url": "/gjx/dyjhPage",
				"params": ["jqbh", "token", "pageNum", "pageSize"]
			},
			{
				"key": "khjl",
				"title": "我的客户经理",
				"url": "/user/khjl",
				"params": ["jqbh", "token", "userid"]
			}
		]
	}
	new Vue({
		el: '#author',
		data: author
	});

	new Vue({
		el: '#jiekouconfig',
		data: config
	});
	console.log(config.jiekous);
})();
