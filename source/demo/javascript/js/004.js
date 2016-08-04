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
