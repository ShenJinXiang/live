var personList = {size: 0, list: []}

var personData = new Vue({
	el: '#personList',
	data: personList
});
$(function() {

	initData();
});

function initData() {
	doPost('/person/list', {}, function(result) {
		console.log(result);
		if (result.result) {
			personList = result.data;
			console.log(personList);
		} else {
			alertMsg(result.msg);
		}
	});
}
