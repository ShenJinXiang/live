$(function () {
	initUI();
	initDepartmentTree();
});

function initUI() {
	$('.left-content').height($(window).height() - 120);
	$('#departmentTree').height($(window).height() - 240);
	$('.right-content').height($(window).height() - 120);
	$('.table-ware').height($(window).height() - 170);
}

function initDepartmentTree() {
	doPost('/department/treeData', {}, function (result) {
		console.log(result);
		if (result.result) {
			let zNodes = result.data;
			let setting = {
				data: {
					simpleData: {
						enable: false,
						idKey: 'id',
						pIdKey: 'pId',
						rootPId: null
					}
				},
				callback: {
					onClick: deptClick
				}
			};
			$.fn.zTree.init($('#departmentTree'), setting, zNodes);
		}
	});
}

function deptClick () {
}
