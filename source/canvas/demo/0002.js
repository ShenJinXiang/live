let inputData = [
	[1, 0, 2,	 0, 0, 9,	 0, 0, 0],
	[0, 0, 4,	 5, 1, 7,	 0, 0, 8],
	[5, 9, 0,	 0, 3, 0,	 0, 0, 0],

	[0, 7, 0,	 0, 6, 0,	 8, 3, 4],
	[0, 0, 6,	 7, 0, 4,	 5, 0, 0],
	[4, 2, 5,	 0, 8, 0,	 0, 9, 0],

	[0, 0, 0,	 0, 2, 0,	 0, 5, 3],
	[2, 0, 0,	 3, 7, 8,	 4, 0, 0],
	[0, 0, 0,	 4, 0, 0,	 2, 0, 9]
];

let data = [];

function initData () {
	data = [];
	for (let r = 0; r < inputData.length; r++) {
		let arr = [];
		let groupr = (r > 2 ? (r > 5 ? '3' : '2') : '1');
		for (let c = 0; c < inputData[r].length; c++) {
			let groupc = (c > 2 ? (c > 5 ? '3' : '2') : '1');
			arr.push({
				value: inputData[r][c],
				values: [],
				group: groupr + '' + groupc
			});
		}
		data.push(arr);
	}
}
initData();
console.log(data);
console.log("--------------");

function setValues() {
	for (let r = 0; r < 9; r++) {
		for (let c = 0; c < 9; c++) {
			if (data[r][c].value === 0) {
				let arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
				let arr2 = getArrByRow(r);
				let arr3 = getArrByColumn(c);
				let arr4 = getArrByGroup(data[r][c].group);
				let arr = filter(filter(filter(arr1, arr2), arr3), arr4);
				data[r][c].values = arr;
				if (arr.length === 1) {
					data[r][c].value = arr[0];
				}
			}
		}
	}
}


setValues();
log();
function log() {
	for (let i = 0; i < 9; i++) {
			console.log('[' + getVal(i, 0) + ',    ' + getVal(i, 1) + ',    ' + getVal(i, 2) + ',    ' + getVal(i, 3) + ',    ' + getVal(i, 4) + ',    ' + getVal(i, 5) + ',    ' + getVal(i, 6) + ',    ' + getVal(i, 7) + ',    ' + getVal(i, 8) + ']');
	}
}

function getVal(x, y) {
	//return (data[x][y].value === 0 ? ('[' + data[x][y].values.join(',') + ']') : data[x][y].value);
	return data[x][y].value + '[' + data[x][y].values + ']'
}

function isOk() {
	let result = true;
	for (let r = 0; r < 9; r++) {
		for (let c = 0; c < 9; c++) {
			if (data[r][c].value === 0) {
				return false;
			}
		}
	}
	return result;
}
function getArrByRow(r) {
	let arr = [];
	for (let i = 0; i < 9; i++) {
		if (data[r][i].value !== 0) {
			arr.push(data[r][i].value);
		}
	}
	return arr;
}

function getArrByColumn(c) {
	let arr = [];
	for (let i = 0; i < 9; i++) {
		if (data[i][c].value !== 0) {
			arr.push(data[i][c].value);
		}
	}
	return arr;
}

function getArrByGroup(group) {
	let arr = [];
	for (let r = 0; r < 9; r++) {
		for (let c = 0; c < 9; c++) {
			if (data[r][c].group === group && data[r][c].value !== 0) {
				arr.push(data[r][c].value);
			}
		}
	}
	return arr;
}

function filter(arr1, arr2) {
	let arr = arr1.filter(function(item) {
		return arr2.indexOf(item) == -1;
	});

	return arr;
}

