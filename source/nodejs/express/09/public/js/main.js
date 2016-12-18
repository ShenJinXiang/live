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

function deptClick (event, treeId, treeNode) {
	let departmentId = treeNode.id;
	initEmployeeList(departmentId);
}

function addDepartment () {
	departmentFormRest();
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
	departmentFormRest();
	let currentNode = getSelectedNode('departmentTree');
	if (!currentNode) {
		alertMsg('请选择需要修改的部门');
		return;
	}
	doPost('/department/queryOne', {id: currentNode.id}, function (result) {
		if (!result.result) {
			alertMsg(result.msg);
		} else {
			$('#department_id').val(result.data.id);
			$('#department_name').val(result.data.name);
			$('#department_pName').val(result.data.pName || '没有上级部门');
			openContent('修改部门', 400, 'departmentContent');
		}
	});
}

function departmentFormRest() {
	$('#departmentForm #department_pId').val('');
	$('#departmentForm #department_pName').val('');
	$('#departmentForm #department_id').val('');
	$('#departmentForm #department_name').val('');
}

function saveDepartment () {
	let data = $('#departmentForm').getFormJson();
	if (data.name === '' || $.trim(data.name) == '') {
		tips('请输入部门名称', 'department_name');
		return;
	}
	let url = '/department/addDepartment';
	if (data.id) {
		url = '/department/updDepartment';
	}
	doPost(url, data, function (result) {
		if (!result.result) {
			alertMsg(result.msg);
		} else {
			let treeObj = getZTreeObj('departmentTree');
			let currentNode = getSelectedNode('departmentTree');
			if (result.data.type === 'add') {
				treeObj.addNodes(currentNode, result.data.data);
				alertMsg('添加成功', function () {
					closeLayer();
				});
			} else if (result.data.type === 'upd') {
				currentNode.name = result.data.data.name;
				treeObj.updateNode(currentNode);
				alertMsg('修改成功', function () {
					closeLayer();
				});
			}
		}
	});
}
	//openContent('添加员工', 500, 'employeeContent');

function delDepartment () {
	let currentNode = getSelectedNode('departmentTree');
	doPost('/department/delDepartment', {id: currentNode.id}, function (result) {
	});
}

function initEmployeeList(departmentId) {
	doPost('/employee/queryList', {'departmentId': departmentId}, function (result) {
		if (!result.result) {
			alertMsg(result.msg);
		} else {
			if (result.data.length === 0) {
				$('#employeeTable tbody').html('<tr><td colspan="7">暂无数据.</td></tr>');
			} else {
				console.log('list');
				console.log(result.data);
				$('#employeeTable tbody').html('');
				result.data.forEach(function(item, index) {
					let _html = '<tr>'
										+ '	<th>' + item.name + '</th>'
										+ '	<th>' + item.age + '</th>'
										+ '	<th>' + ((item.sex == '1') ? '男' : '女') + '</th>'
										+ '	<th>' + item.departmentName + '</th>'
										+ '	<th>' + item.address + '</th>'
										+ '	<th>' + item.desc + '</th>'
										+ '	<th>'
										+ "		<a href=\"javascript:updEmployee('" + item.id + "')\">修改</a>"
										+ "		<a href=\"javascript:delEmployee('" + item.id + "')\">删除</a>"
										+ '	</th>'
										+ '</tr>';
					$('#employeeTable tbody').append($(_html));
				});
			}
		}
	});
}

function addEmployee() {
	let currentNode = getSelectedNode('departmentTree');
	if (!currentNode || !currentNode.id) {
		alertMsg('请选择部门');
		return;
	}
	$('#employeeForm').get(0).reset();
	$('#employeeForm #employee_departmentId').val(currentNode.id);
	$('#employeeForm #employee_departmentName').val(currentNode.name);
	openContent('添加员工', 500, 'employeeContent');
}

function updEmployee(employeeId) {
	$('#employeeForm').get(0).reset();
	console.log(employeeId);
	doPost('/employee/queryOne', {id: employeeId}, function (result) {
		if (!result.result) {
			alertMsg(result.msg);
		} else {
			$("#employeeForm #employee_id").val(result.data.id);
			$("#employeeForm #employee_name").val(result.data.name);
			$("#employeeForm #employee_age").val(result.data.age);
			$("#employeeForm #employee_address").val(result.data.address);
			$("#employeeForm #employee_departmentName").val(result.data.departmentName);
			$("#employeeForm #employee_departmentId").val('');
			$("#employeeForm #employee_desc").val(result.data.desc);
			openContent('修改员工', 500, 'employeeContent');
		}
	});
}

function delEmployee(employeeId) {
	doPost('/employee/delEmployee', {id: employeeId}, function (result) {
		if (!result.result) {
			alertMsg(result.msg);
		} else {
			let currentNode = getSelectedNode('departmentTree');
			initEmployeeList(currentNode.id);
			alertMsg('删除成功', function () {
				closeLayer();
			});
		}
	});
}

function saveEmployee() {
	let data = $('#employeeForm').getFormJson();
	console.log(data);
	let url = '/employee/addEmployee';
	if (data.id) {
		url = '/employee/updEmployee';
	}
	doPost(url, data, function (result) {
		console.log(result);
		if (!result.result) {
			alertMsg(result.msg);
		} else {
			initEmployeeList(data.departmentId);
			alertMsg('保存成功', function () {
				closeLayer();
			});
		}
	});
}
