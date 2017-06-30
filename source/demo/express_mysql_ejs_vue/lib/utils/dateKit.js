/**
 * /lib/utils/dateKit.js
 */

let getDateStr = exports.getDateStr = function (date, patter) {
	if (!(date instanceof Date)) {
		return '';
	}
	if (!date) {
		return '';
	}
	let year = date.getFullYear();
	let month = getStr(date.getMonth() + 1);
	let d = getStr(date.getDate());
	let hour = getStr(date.getHours());
	let minute = getStr(date.getMinutes());
	let second = getStr(date.getSeconds());
	let millisecond = date.getMilliseconds();
	millisecond = (millisecond > 99) ? 
		('' + millisecond) : 
		((millisecond > 9) ? ('0' + millisecond) : ('00' + millisecond));
	if (!!patter) {
		let str = 
			patter.replace('%Y', year)
						.replace('%m', month)
						.replace('%d', d)
						.replace('%h', hour)
						.replace('%i', minute)
						.replace('%s', second)
						.replace('%S', millisecond);
		return str;
	}

	function getStr(n) {
		return (n > 9) ? ('' + n) : ('0' + n);
	}
};

let getFirstDate = exports.getFirstDate = function() {
	let d = new Date();
	d.setDate(1);
	d.setHours(0);
	d.setMinutes(0);
	d.setSeconds(0);
	d.setMilliseconds(0);
	return d;
};

let getLastDate = exports.getLastDate = function() {
	let d = new Date();
	d.setMonth(d.getMonth() + 1);
	d.setDate(0);
	d.setHours(23);
	d.setMinutes(59);
	d.setSeconds(59);
	d.setMilliseconds(999);
	return d;
};

let getFirstDateStr = exports.getFirstDateStr = function() {
	return getDateStr(getFirstDate(), '%Y-%m-%d');
};

let getLastDateStr = exports.getLastDateStr = function() {
	return getDateStr(getLastDate(), '%Y-%m-%d');
};

let currentDateStr = exports.currentDateStr = function() {
	return getDateStr(new Date(), '%Y-%m-%d %h:%i:%s %S');
}
