/**
 * 把p中的可枚举属性复制到o中，并返回o
 * 如果o中p中含有同名属性，则覆盖o中的属性
 * 这个函数并不处理getter和setter以及复制属性
 */
function extend(o, p) {
	for(prop in p) {
		o[prop] = p[prop];
	}
	return o;
}

/**
 * 将p中的可枚举属性复制到o中，并返回o
 * 如果o和p中有同名的属性，o中的属性将不受影响
 * 这个函数并不处理getter和setter以及复制属性
 */
function merge(o, p) {
	for(prop in p) {
		if(o.hasOwnProperty[prop]) continue;
		o[prop] = p[prop];
	}
	return o;
}

/**
 * 如果o中的属性在p中没有同名属性，则从o中删除这个属性，并返回o
 */
function restrict(o, p) {
	for(prop in o) {
		if(!(prop in p)) delete o[prop];
	}
	return o;
}
