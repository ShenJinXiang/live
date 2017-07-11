var data = {
	personList: [],
	person: {
		id: '',
		name: '',
		sex: '男',
		age: '',
		address: ''
	}
}

var mainData = new Vue({
	el: '#mainData',
	data: data,
	methods: {
		// 新增事件，弹出新增窗口
		add: function() {
			data.person = {
				id:'',
				name: '',
				sex: '男',
				age: '',
				address: ''
			};
			openContent('新增人员', 700, 'personContent');
		},
		edit: function(id) {
			data.person = {
				id:'',
				name: '',
				sex: '男',
				age: '',
				address: ''
			};
			doPost('/person/find', {id: id}, function(result) {
				if (result.result) {
					data.person = result.data;
					openContent('修改人员', 700, 'personContent');
				} else {
					alertMsg(result.msg);
				}
			});
		},
		save: function() {
			var url = '/person/add';
			if (data.person.id) {
				url = '/person/edit';
			}
			doPost(url, data.person, function(result) {
				if (result.result) {
					initData();
					closeLayer();
				} else {
					alertMsg(result.msg);
				}
			});
		},
		del: function(id) {
			doPost('/person/delete', {id: id}, function(result) {
				if (result.result) {
					initData();
				} else {
					alertMsg(result.msg);
				}
			});
		},
		close: function() {
			closeLayer();
		}
	}
});
$(function() {

	initData();
});

function initData() {
	doPost('/person/list', {}, function(result) {
		if (result.result) {
			data.personList = result.data;
		} else {
			alertMsg(result.msg);
		}
	});
}
