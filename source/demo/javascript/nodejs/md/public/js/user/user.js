$(function () {
	initGrid();
});

function initGrid() {
	$("#userGrid").jqGrid({
		url: '/user/userList',
    autowidth: true,
    height: (($(window.document).height()) - 160),
    datatype: 'json',
    colNames: ['姓名', '年龄', '地址', '说明', '操作', 'userid'],
    colModel: [
			{name: 'name', index: 'name', width: 150, sortable: false},
			{name: 'age', index: 'age', width: 100, sortable: false},
			{name: 'address', index: 'address', width: 200, sortable: false},
			{name: 'desc', index: 'desc', width: 300, sortable: false},
      {name: 'cz', index: 'cz', width: 150, sortable: false, align: "center", title: false, formatter: function (value, options, row) {
																																																																				console.log(row.userid);
				return '<span>' +
								'<a title="修改用户" href=\"javascript:updateUser(\'' + row.userid + '\')\">修改</a>' +
								'&nbsp;&nbsp;' +
								'<a title="删除用户" href=\"javascript:deleteUser(\'' + row.userid + '\')\">删除</a>' +
								'</span>';
      }},
			{name: 'userid', index:'userid', hidden:'true'}
    ],
		prmNames: {
			rows: "limit"
		},
		jsonReader: {
			root: "message.list",
			page: "message.pageNumber",
			total: "message.totalPage",
			records: "message.totalRow"
		},
		rowNum: 50,
		rowList: [50, 100, 150],
		pager: '#userPages',
		mtype: "POST",
		rownumbers: true,
		viewrecords: true,
		sortable: false
	});
}

function addUser() {
	$("#userForm")[0].reset();
	layer.open({
		title: '新增用户',
		type: 1,
		shadeClose: true,
		area: ['300px', '300px'],
		content: $("#userContent")
	});
}

function saveUser() {
	var url = '/user/addUser';
	if ($('#userid').val()) {
		url = '/user/updateUser';
	}
	$('#userForm').ajaxSubmit({
		type: 'post',
		url: url,
		dataTypa: 'json',
		async: false,
		success: function(json) {
			console.dir(json);
			if (json.result) {
				layer.closeAll();
				refreshUser();
				layer.msg('保存成功！');
			} else {
				layer.closeAll();
				layer.msg(json.msg);
			}
		}
	});
}

function refreshUser() {
	$("#userGrid").setGridParam({"postData": {}}).trigger("reloadGrid",[{page: 1}]);
}

function updateUser(userid) {
	$("#userForm")[0].reset();
	var user;
	$.ajax({
		type: 'post',
		url: '/user/queryOneUser',
		data: {userid: userid},
		dataType: 'json',
		async: false,
		success: function (data) {
			user = data;
		}
	});
	console.dir(user);

	$("#userid").val(user.id);
	$("#name").val(user.name);
	$("#username").val(user.username);
	$("#password").val(user.password);
	$("#email").val(user.email);
	$("#address").val(user.address);
	$("#desc").val(user.desc);
	$("#age").val(user.age);
	layer.open({
		title: '修改用户',
		type: 1,
		shadeClose: true,
		area: ['300px', '300px'],
		content: $("#userContent")
	});

}

function deleteUser(userid) {
	layer.msg('确定要删除吗？', {
		time: 0,
		btn: ['确定', '取消'],
		yes: function (index) {
			layer.close(index);
			$.ajax({
				type: 'post',
				url: '/user/deleteUser',
				data: {userid: userid},
				dataType: 'json',
				async: false,
				success: function (data) {
					if (data.result) {
						layer.msg('删除成功');
						refreshUser();
						layer.closeAll();
					} else {
						lsyer.msg(data.msg);
						layer.closeAll();
					}
				}
			});
		}
	});
}
