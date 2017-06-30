/**
 *  /lib/utils/log.js
 */

const dateKit = require('./dateKit');

module.exports = function(data) {
	if (!data) {
		return;
	}
	let dateStr = dateKit.currentDateStr();
	if (typeof data === 'string') {
		console.log(`[${dateStr}] ${data}`);
		return;
	}
	if (data instanceof Date) {
		console.log(dateKit.getDateStr(data, '%Y-%m-%d %h:%i:%s'));
		return;
	}
	if (typeof data === 'object') {
		let obj = JSON.stringify(data);
		console.log(`[${dateStr}] ${obj}`);
		return;
	}
	console.log('[' + dateStr + '] ' + data);
};
