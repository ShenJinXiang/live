function getDateStr(date1) {
	let year = date1.getFullYear();
	let month = date1.getMonth();
	let date = date1.getDate();
	let day = date1.getDay();
	month = month + 1;
	month = (month > 9) ? '' + month : '0' + month;
	date = (date > 9) ? '' + date : '0' + date;
	let result = year + '-' + month + '-' + date;
	return result;
}

function getFirstDay() {
	let date1 = new Date();
	let d = new Date(date1.getFullYear(), date1.getMonth(), 1);
	return getDateStr(d);
}

function getLastDay() {
	let date1 = new Date();
	let d = new Date(date1.getFullYear(), date1.getMonth() + 1, 0);
	return getDateStr(d);
}

console.log('----------------------------------');


console.log(getFirstDay());
console.log(getLastDay());
