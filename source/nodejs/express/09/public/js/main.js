$(function () {
	initUI();
	bindEvent();
	initDepartmentTree();
});

function initUI() {
	$('.left-content').height($(window).height() - 120);
	$('#departmentTree').height($(window).height() - 240);
	$('.right-content').height($(window).height() - 120);
	$('.table-ware').height($(window).height() - 170);
}

/**
 * 绑定事件
 */
function bindEvent() {
	$('#add_department_btn').click(addDepartment);
	$('#upd_department_btn').click(updDepartment);
	$('#del_department_btn').click(delDepartment);
}

/**
 * 初始化部门树
 */
function initDepartmentTree() {
	doPost('/department/treeData', {}, function (result) {
		if (result.result) {
			let zNodes = result.data;
			console.log(zNodes);
			let setting = {
				data: {
					simpleData: {
						enable: true,
						idKey: 'id',
						pIdKey: 'pId',
						rootPId: null
					}
				},
				view: {
					selectedMulti: false
				},
				callback: {
					onClick: deptClick
				}
			};
			$.fn.zTree.init($('#departmentTree'), setting, zNodes);
		}
	});
}

function getZTreeObj(id) {
	return $.fn.zTree.getZTreeObj(id);
}

function getSelectedNode(id) {
	let nodes = getZTreeObj(id).getSelectedNodes();
	if (!nodes || nodes.length === 0) {
		return null;
	}
	return nodes[0];
}

function deptClick () {
}

function addDepartment () {
	let currentNode = getSelectedNode('departmentTree');
	openContent('添加部门', 400, 'departmentContent');
}

function updDepartment () {
	openContent('添加员工', 500, 'employeeContent');

}

function delDepartment () {
}
