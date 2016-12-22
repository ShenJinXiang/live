let data = [
	{"GNMK":"00","XQLX":"00","SJ_HJ":4,"WJJ_HJ":4,"LSJJ_HJ":0,"CDJJ_HJ":0},
	{"GNMK":"01","XQLX":"01","SJ_HJ":1,"WJJ_HJ":1,"LSJJ_HJ":0,"CDJJ_HJ":0},
	{"GNMK":"01","XQLX":"02","SJ_HJ":1,"WJJ_HJ":0,"LSJJ_HJ":0,"CDJJ_HJ":1},
	{"GNMK":"01","XQLX":"03","SJ_HJ":1,"WJJ_HJ":0,"LSJJ_HJ":0,"CDJJ_HJ":1},
	{"GNMK":"01","XQLX":"04","SJ_HJ":1,"WJJ_HJ":0,"LSJJ_HJ":1,"CDJJ_HJ":0},
	{"GNMK":"01","XQLX":"05","SJ_HJ":1,"WJJ_HJ":0,"LSJJ_HJ":1,"CDJJ_HJ":0},
	{"GNMK":"02","XQLX":"01","SJ_HJ":2,"WJJ_HJ":1,"LSJJ_HJ":0,"CDJJ_HJ":1},
	{"GNMK":"02","XQLX":"02","SJ_HJ":6,"WJJ_HJ":2,"LSJJ_HJ":1,"CDJJ_HJ":3},
	{"GNMK":"02","XQLX":"03","SJ_HJ":3,"WJJ_HJ":3,"LSJJ_HJ":0,"CDJJ_HJ":0},
	{"GNMK":"02","XQLX":"04","SJ_HJ":1,"WJJ_HJ":1,"LSJJ_HJ":0,"CDJJ_HJ":0},
	{"GNMK":"02","XQLX":"05","SJ_HJ":1,"WJJ_HJ":0,"LSJJ_HJ":0,"CDJJ_HJ":1},
	{"GNMK":"03","XQLX":"01","SJ_HJ":1,"WJJ_HJ":1,"LSJJ_HJ":0,"CDJJ_HJ":0},
	{"GNMK":"03","XQLX":"02","SJ_HJ":1,"WJJ_HJ":0,"LSJJ_HJ":0,"CDJJ_HJ":1},
	{"GNMK":"03","XQLX":"03","SJ_HJ":1,"WJJ_HJ":1,"LSJJ_HJ":0,"CDJJ_HJ":0},
	{"GNMK":"03","XQLX":"04","SJ_HJ":1,"WJJ_HJ":1,"LSJJ_HJ":0,"CDJJ_HJ":0},
	{"GNMK":"04","XQLX":"01","SJ_HJ":1,"WJJ_HJ":1,"LSJJ_HJ":0,"CDJJ_HJ":0},
	{"GNMK":"04","XQLX":"02","SJ_HJ":2,"WJJ_HJ":1,"LSJJ_HJ":1,"CDJJ_HJ":0},
	{"GNMK":"04","XQLX":"03","SJ_HJ":1,"WJJ_HJ":0,"LSJJ_HJ":0,"CDJJ_HJ":1},
	{"GNMK":"04","XQLX":"04","SJ_HJ":1,"WJJ_HJ":0,"LSJJ_HJ":0,"CDJJ_HJ":1},
	{"GNMK":"04","XQLX":"05","SJ_HJ":1,"WJJ_HJ":1,"LSJJ_HJ":0,"CDJJ_HJ":0}
];

let newData = [];

let gnArr = [
	{dmbh: '00', dmmc: '请选择'},
	{dmbh: '01', dmmc: '业务'},
	{dmbh: '02', dmmc: '财务'},
	{dmbh: '03', dmmc: '税务'},
	{dmbh: '04', dmmc: '其它'},
];

let xqlx = [
	{dmbh: '00', dmmc: '请选择'},
	{dmbh: '01', dmmc: '新增功能'},
	{dmbh: '02', dmmc: '功能改进'},
	{dmbh: '03', dmmc: '易用性提升'},
	{dmbh: '04', dmmc: 'BUG修复'},
	{dmbh: '05', dmmc: '新系统'}	
];

let hzArr = [];
for (let xqIndex = 0; xqIndex < xqlx.length; xqIndex++) {
	hzArr.push({
			GNMK_MC: '汇总',
			XQLX: xqlx[xqIndex].dmbh,
			XQLX_MC: xqlx[xqIndex].dmmc,
			SJ_HJ: 0,
			WJJ_HJ: 0,
			LSJJ_HJ: 0,
			CDJJ_HJ: 0
	});
}

let dataIndex = 0;
for (let gnIndex = 0; gnIndex < gnArr.length; gnIndex++) {
	let gn = gnArr[gnIndex];
	for (let xqIndex = 0; xqIndex < xqlx.length; xqIndex++) {
		let xq = xqlx[xqIndex];
		let row = data[dataIndex];
		if (row['GNMK'] == gn['dmbh'] && row['XQLX'] == xq['dmbh']) {
			row.GNMK_MC = gn.dmmc;
			row.XQLX_MC = xq.dmmc;
			newData.push(row);
			dataIndex++;
		} else {
			row = {
				GNMK: gn.dmbh,
				GNMK_MC: gn.dmmc,
				XQLX: xq.dmbh,
				XQLX_MC: xq.dmmc,
				SJ_HJ: 0,
				WJJ_HJ: 0,
				LSJJ_HJ: 0,
				CDJJ_HJ: 0
			};
			newData.push(row);
		}

		// 计算汇总数据
		hzArr[xqIndex].SJ_HJ += row['SJ_HJ'];
		hzArr[xqIndex].WJJ_HJ += row['WJJ_HJ'];
		hzArr[xqIndex].LSJJ_HJ += row['LSJJ_HJ'];
		hzArr[xqIndex].CDJJ_HJ += row['CDJJ_HJ'];
	}
}

newData = newData.concat(hzArr);
console.log(newData);

/*
[
	{ GNMK: '00', XQLX: '00', SJ_HJ: 4, WJJ_HJ: 4, LSJJ_HJ: 0, CDJJ_HJ: 0, GNMK_MC: '请选择', XQLX_MC: '请选择' },
  { GNMK: '00', XQLX: '01', SJ_HJ: 0, WJJ_HJ: 0, LSJJ_HJ: 0, CDJJ_HJ: 0, GNMK_MC: '请选择', XQLX_MC: '新增功能' },
  { GNMK: '00', XQLX: '02', SJ_HJ: 0, WJJ_HJ: 0, LSJJ_HJ: 0, CDJJ_HJ: 0, GNMK_MC: '请选择', XQLX_MC: '功能改进' },
  { GNMK: '00', XQLX: '03', SJ_HJ: 0, WJJ_HJ: 0, LSJJ_HJ: 0, CDJJ_HJ: 0, GNMK_MC: '请选择', XQLX_MC: '易用性提升' },
  { GNMK: '00', XQLX: '04', SJ_HJ: 0, WJJ_HJ: 0, LSJJ_HJ: 0, CDJJ_HJ: 0, GNMK_MC: '请选择', XQLX_MC: 'BUG修复' },
  { GNMK: '00', XQLX: '05', SJ_HJ: 0, WJJ_HJ: 0, LSJJ_HJ: 0, CDJJ_HJ: 0, GNMK_MC: '请选择', XQLX_MC: '新系统' },

  { GNMK: '01', XQLX: '00', SJ_HJ: 0, WJJ_HJ: 0, LSJJ_HJ: 0, CDJJ_HJ: 0, GNMK_MC: '业务', XQLX_MC: '请选择' },
  { GNMK: '01', XQLX: '01', SJ_HJ: 1, WJJ_HJ: 1, LSJJ_HJ: 0, CDJJ_HJ: 0, GNMK_MC: '业务', XQLX_MC: '新增功能' },
  { GNMK: '01', XQLX: '02', SJ_HJ: 1, WJJ_HJ: 0, LSJJ_HJ: 0, CDJJ_HJ: 1, GNMK_MC: '业务', XQLX_MC: '功能改进' },
  { GNMK: '01', XQLX: '03', SJ_HJ: 1, WJJ_HJ: 0, LSJJ_HJ: 0, CDJJ_HJ: 1, GNMK_MC: '业务', XQLX_MC: '易用性提升' },
  { GNMK: '01', XQLX: '04', SJ_HJ: 1, WJJ_HJ: 0, LSJJ_HJ: 1, CDJJ_HJ: 0, GNMK_MC: '业务', XQLX_MC: 'BUG修复' },
  { GNMK: '01', XQLX: '05', SJ_HJ: 1, WJJ_HJ: 0, LSJJ_HJ: 1, CDJJ_HJ: 0, GNMK_MC: '业务', XQLX_MC: '新系统' },
		
  { GNMK: '02', XQLX: '00', SJ_HJ: 0, WJJ_HJ: 0, LSJJ_HJ: 0, CDJJ_HJ: 0, GNMK_MC: '财务', XQLX_MC: '请选择' },
  { GNMK: '02', XQLX: '01', SJ_HJ: 2, WJJ_HJ: 1, LSJJ_HJ: 0, CDJJ_HJ: 1, GNMK_MC: '财务', XQLX_MC: '新增功能' },
  { GNMK: '02', XQLX: '02', SJ_HJ: 6, WJJ_HJ: 2, LSJJ_HJ: 1, CDJJ_HJ: 3, GNMK_MC: '财务', XQLX_MC: '功能改进' },
  { GNMK: '02', XQLX: '03', SJ_HJ: 3, WJJ_HJ: 3, LSJJ_HJ: 0, CDJJ_HJ: 0, GNMK_MC: '财务', XQLX_MC: '易用性提升' },
  { GNMK: '02', XQLX: '04', SJ_HJ: 1, WJJ_HJ: 1, LSJJ_HJ: 0, CDJJ_HJ: 0, GNMK_MC: '财务', XQLX_MC: 'BUG修复' },
  { GNMK: '02', XQLX: '05', SJ_HJ: 1, WJJ_HJ: 0, LSJJ_HJ: 0, CDJJ_HJ: 1, GNMK_MC: '财务', XQLX_MC: '新系统' },

  { GNMK: '03', XQLX: '00', SJ_HJ: 0, WJJ_HJ: 0, LSJJ_HJ: 0, CDJJ_HJ: 0, GNMK_MC: '税务', XQLX_MC: '请选择' },
  { GNMK: '03', XQLX: '01', SJ_HJ: 1, WJJ_HJ: 1, LSJJ_HJ: 0, CDJJ_HJ: 0, GNMK_MC: '税务', XQLX_MC: '新增功能' },
  { GNMK: '03', XQLX: '02', SJ_HJ: 1, WJJ_HJ: 0, LSJJ_HJ: 0, CDJJ_HJ: 1, GNMK_MC: '税务', XQLX_MC: '功能改进' },
  { GNMK: '03', XQLX: '03', SJ_HJ: 1, WJJ_HJ: 1, LSJJ_HJ: 0, CDJJ_HJ: 0, GNMK_MC: '税务', XQLX_MC: '易用性提升' },
  { GNMK: '03', XQLX: '04', SJ_HJ: 1, WJJ_HJ: 1, LSJJ_HJ: 0, CDJJ_HJ: 0, GNMK_MC: '税务', XQLX_MC: 'BUG修复' },
  { GNMK: '03', XQLX: '05', SJ_HJ: 0, WJJ_HJ: 0, LSJJ_HJ: 0, CDJJ_HJ: 0, GNMK_MC: '税务', XQLX_MC: '新系统' },

  { GNMK: '04', XQLX: '00', SJ_HJ: 0, WJJ_HJ: 0, LSJJ_HJ: 0, CDJJ_HJ: 0, GNMK_MC: '其它', XQLX_MC: '请选择' },
  { GNMK: '04', XQLX: '01', SJ_HJ: 1, WJJ_HJ: 1, LSJJ_HJ: 0, CDJJ_HJ: 0, GNMK_MC: '其它', XQLX_MC: '新增功能' },
  { GNMK: '04', XQLX: '02', SJ_HJ: 2, WJJ_HJ: 1, LSJJ_HJ: 1, CDJJ_HJ: 0, GNMK_MC: '其它', XQLX_MC: '功能改进' },
  { GNMK: '04', XQLX: '03', SJ_HJ: 1, WJJ_HJ: 0, LSJJ_HJ: 0, CDJJ_HJ: 1, GNMK_MC: '其它', XQLX_MC: '易用性提升' },
  { GNMK: '04', XQLX: '04', SJ_HJ: 1, WJJ_HJ: 0, LSJJ_HJ: 0, CDJJ_HJ: 1, GNMK_MC: '其它', XQLX_MC: 'BUG修复' },
  { GNMK: '04', XQLX: '05', SJ_HJ: 1, WJJ_HJ: 1, LSJJ_HJ: 0, CDJJ_HJ: 0, GNMK_MC: '其它', XQLX_MC: '新系统' }

  { GNMK_MC: '汇总', XQLX: '00', SJ_HJ: 4, WJJ_HJ: 4, LSJJ_HJ: 0, CDJJ_HJ: 0, XQLX_MC: '请选择' },
  { GNMK_MC: '汇总', XQLX: '01', SJ_HJ: 5, WJJ_HJ: 4, LSJJ_HJ: 0, CDJJ_HJ: 1, XQLX_MC: '新增功能' },
  { GNMK_MC: '汇总', XQLX: '02', SJ_HJ: 10, WJJ_HJ: 3, LSJJ_HJ: 2, CDJJ_HJ: 5, XQLX_MC: '功能改进' },
  { GNMK_MC: '汇总', XQLX: '03', SJ_HJ: 6, WJJ_HJ: 4, LSJJ_HJ: 0, CDJJ_HJ: 2, XQLX_MC: '易用性提升' },
  { GNMK_MC: '汇总', XQLX: '04', SJ_HJ: 4, WJJ_HJ: 2, LSJJ_HJ: 1, CDJJ_HJ: 1, XQLX_MC: 'BUG修复' },
  { GNMK_MC: '汇总', XQLX: '05', SJ_HJ: 3, WJJ_HJ: 1, LSJJ_HJ: 1, CDJJ_HJ: 1, XQLX_MC: '新系统' }
]
*/

let arr1 = newData.slice(0, 2 * xqlx.length);
let arr2 = newData.slice(2 * xqlx.length, 3 * xqlx.length);
let arr3 = newData.slice(3 * xqlx.length, 4 * xqlx.length);
let arr4 = newData.slice(4 * xqlx.length);

console.log(arr1.length);
console.log(arr2.length);
console.log(arr3.length);
console.log(arr4.length);

let arr5 = [];
for (let index = 0; index < xqlx.length; index++) {
	arr5.push({
			GNMK: '02-03',
			GNMK_MC: '财税',
			XQLX: xqlx[index].dmbh,
			XQLX_MC: xqlx[index].dmmc,
			SJ_HJ: arr2[index]['SJ_HJ'] + arr3[index]['SJ_HJ'],
			WJJ_HJ: arr2[index]['WJJ_HJ'] + arr3[index]['WJJ_HJ'],
			LSJJ_HJ: arr2[index]['LSJJ_HJ'] + arr3[index]['LSJJ_HJ'],
			CDJJ_HJ: arr2[index]['CDJJ_HJ'] + arr3[index]['CDJJ_HJ']
	});
}

newData = arr1.concat(arr5, arr4);

console.log(newData);

[
	{ GNMK: '00', XQLX: '00', SJ_HJ: 4, WJJ_HJ: 4, LSJJ_HJ: 0, CDJJ_HJ: 0, GNMK_MC: '请选择', XQLX_MC: '请选择' },
  { GNMK: '00', GNMK_MC: '请选择', XQLX: '01', XQLX_MC: '新增功能', SJ_HJ: 0, WJJ_HJ: 0, LSJJ_HJ: 0, CDJJ_HJ: 0 },
  { GNMK: '00', GNMK_MC: '请选择', XQLX: '02', XQLX_MC: '功能改进', SJ_HJ: 0, WJJ_HJ: 0, LSJJ_HJ: 0, CDJJ_HJ: 0 },
  { GNMK: '00', GNMK_MC: '请选择', XQLX: '03', XQLX_MC: '易用性提升', SJ_HJ: 0, WJJ_HJ: 0, LSJJ_HJ: 0, CDJJ_HJ: 0 },
  { GNMK: '00', GNMK_MC: '请选择', XQLX: '04', XQLX_MC: 'BUG修复', SJ_HJ: 0, WJJ_HJ: 0, LSJJ_HJ: 0, CDJJ_HJ: 0 },
  { GNMK: '00', GNMK_MC: '请选择', XQLX: '05', XQLX_MC: '新系统', SJ_HJ: 0, WJJ_HJ: 0, LSJJ_HJ: 0, CDJJ_HJ: 0 },
  { GNMK: '01', GNMK_MC: '业务', XQLX: '00', XQLX_MC: '请选择', SJ_HJ: 0, WJJ_HJ: 0, LSJJ_HJ: 0, CDJJ_HJ: 0 },
  { GNMK: '01', XQLX: '01', SJ_HJ: 1, WJJ_HJ: 1, LSJJ_HJ: 0, CDJJ_HJ: 0, GNMK_MC: '业务', XQLX_MC: '新增功能' },
  { GNMK: '01', XQLX: '02', SJ_HJ: 1, WJJ_HJ: 0, LSJJ_HJ: 0, CDJJ_HJ: 1, GNMK_MC: '业务', XQLX_MC: '功能改进' },
  { GNMK: '01', XQLX: '03', SJ_HJ: 1, WJJ_HJ: 0, LSJJ_HJ: 0, CDJJ_HJ: 1, GNMK_MC: '业务', XQLX_MC: '易用性提升' },
  { GNMK: '01', XQLX: '04', SJ_HJ: 1, WJJ_HJ: 0, LSJJ_HJ: 1, CDJJ_HJ: 0, GNMK_MC: '业务', XQLX_MC: 'BUG修复' },
  { GNMK: '01', XQLX: '05', SJ_HJ: 1, WJJ_HJ: 0, LSJJ_HJ: 1, CDJJ_HJ: 0, GNMK_MC: '业务', XQLX_MC: '新系统' },
  { GNMK: '02-03', GNMK_MC: '财税', XQLX: '00', XQLX_MC: '请选择', SJ_HJ: 0, WJJ_HJ: 0, LSJJ_HJ: 0, CDJJ_HJ: 0 },
  { GNMK: '02-03', GNMK_MC: '财税', XQLX: '01', XQLX_MC: '新增功能', SJ_HJ: 3, WJJ_HJ: 2, LSJJ_HJ: 0, CDJJ_HJ: 1 },
  { GNMK: '02-03', GNMK_MC: '财税', XQLX: '02', XQLX_MC: '功能改进', SJ_HJ: 7, WJJ_HJ: 2, LSJJ_HJ: 1, CDJJ_HJ: 4 },
  { GNMK: '02-03', GNMK_MC: '财税', XQLX: '03', XQLX_MC: '易用性提升', SJ_HJ: 4, WJJ_HJ: 4, LSJJ_HJ: 0, CDJJ_HJ: 0 },
  { GNMK: '02-03', GNMK_MC: '财税', XQLX: '04', XQLX_MC: 'BUG修复', SJ_HJ: 2, WJJ_HJ: 2, LSJJ_HJ: 0, CDJJ_HJ: 0 },
  { GNMK: '02-03', GNMK_MC: '财税', XQLX: '05', XQLX_MC: '新系统', SJ_HJ: 1, WJJ_HJ: 0, LSJJ_HJ: 0, CDJJ_HJ: 1 },
  { GNMK: '04', GNMK_MC: '其它', XQLX: '00', XQLX_MC: '请选择', SJ_HJ: 0, WJJ_HJ: 0, LSJJ_HJ: 0, CDJJ_HJ: 0 },
  { GNMK: '04', XQLX: '01', SJ_HJ: 1, WJJ_HJ: 1, LSJJ_HJ: 0, CDJJ_HJ: 0, GNMK_MC: '其它', XQLX_MC: '新增功能' },
  { GNMK: '04', XQLX: '02', SJ_HJ: 2, WJJ_HJ: 1, LSJJ_HJ: 1, CDJJ_HJ: 0, GNMK_MC: '其它', XQLX_MC: '功能改进' },
  { GNMK: '04', XQLX: '03', SJ_HJ: 1, WJJ_HJ: 0, LSJJ_HJ: 0, CDJJ_HJ: 1, GNMK_MC: '其它', XQLX_MC: '易用性提升' },
  { GNMK: '04', XQLX: '04', SJ_HJ: 1, WJJ_HJ: 0, LSJJ_HJ: 0, CDJJ_HJ: 1, GNMK_MC: '其它', XQLX_MC: 'BUG修复' },
  { GNMK: '04', XQLX: '05', SJ_HJ: 1, WJJ_HJ: 1, LSJJ_HJ: 0, CDJJ_HJ: 0, GNMK_MC: '其它', XQLX_MC: '新系统' },
  { GNMK_MC: '汇总', XQLX: '00', XQLX_MC: '请选择', SJ_HJ: 4, WJJ_HJ: 4, LSJJ_HJ: 0, CDJJ_HJ: 0 },
  { GNMK_MC: '汇总', XQLX: '01', XQLX_MC: '新增功能', SJ_HJ: 5, WJJ_HJ: 4, LSJJ_HJ: 0, CDJJ_HJ: 1 },
  { GNMK_MC: '汇总', XQLX: '02', XQLX_MC: '功能改进', SJ_HJ: 10, WJJ_HJ: 3, LSJJ_HJ: 2, CDJJ_HJ: 5 },
  { GNMK_MC: '汇总', XQLX: '03', XQLX_MC: '易用性提升', SJ_HJ: 6, WJJ_HJ: 4, LSJJ_HJ: 0, CDJJ_HJ: 2 },
  { GNMK_MC: '汇总', XQLX: '04', XQLX_MC: 'BUG修复', SJ_HJ: 4, WJJ_HJ: 2, LSJJ_HJ: 1, CDJJ_HJ: 1 },
  { GNMK_MC: '汇总', XQLX: '05', XQLX_MC: '新系统', SJ_HJ: 3, WJJ_HJ: 1, LSJJ_HJ: 1, CDJJ_HJ: 1 } 
]
