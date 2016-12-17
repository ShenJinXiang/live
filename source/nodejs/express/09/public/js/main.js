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
	if (!currentNode) {
		$('#department_pId').val('');
		$('#department_pName').val('没有上级部门');
	} else {
		$('#department_pId').val(currentNode.id);
		$('#department_pName').val(currentNode.name);
	}
	openContent('添加部门', 400, 'departmentContent');
}

function updDepartment () {
	let currentNode = getSelectedNode('departmentTree');
	if (!currentNode) {
		alertMsg('请选择需要修改的部门');
		return;
	}
	openContent('修改部门', 400, 'departmentContent');
}
	//openContent('添加员工', 500, 'employeeContent');

function delDepartment () {
}
