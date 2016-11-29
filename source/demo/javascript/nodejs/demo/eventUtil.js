// eventUtil.js
function EventObj() {
}

let ep = EventObj.prototype;
ep.maxListeners = 10;
ep.events = Object.create(null);

/**
 * 获取最大监听器数量
 */
ep.getMaxListeners = function () {
	return this.maxListeners;
};

/**
 * 设置最大监听器数量
 */
ep.setMaxListeners = function (arg) {
	if (isNaN(arg)) {
		throw new Error('参数错误，不是数字');
	}
	this.maxListeners = arg;
};

/**
 * 添加监听器
 */
ep.addListener = ep.on = function (eventName, listener) {
	if (!this.events[eventName]) {
		ep.events[eventName] = [];
	}
	this.events[eventName].push({
		name: eventName,
		listener: listener,
		times: 'static'
	});
};

/**
 * 添加监听器，只执行一次
 */
ep.once = function (eventName, listener) {
	if (!this.events[eventName]) {
		this.events[eventName] = [];
	}
	this.events[eventName].push({
		name: eventName,
		listener: listener,
		times: '1'
	});
};

/**
 * 触发事件
 */
ep.emit = function (eventName) {
	if (this.events && this.events[eventName]) {
		var args = [];
		for (let i = 1; i < arguments.length; i++) {
			args.push(arguments[i]);
		}
		if (this.events[eventName].length > this.getMaxListeners()) {
			throw new Error('事件监听器数量超过' + this.getMaxListeners());
		}
		this.events[eventName] = this.events[eventName].filter(function (item) {
			item.listener.apply(null, args);
			return item.times !== '1';
		});
	}
};

/**
 * 删除监听器
 */
ep.removeAllListeners = function (eventName) {
	if (eventName) {
		this.events[eventName] = [];
	} else {
		this.events = Object.create(null);
	}
};

/**
 * 删除某一监听器
 */
ep.removeListener = function (eventName, listener) {
	if (this.events[eventName]) {
		this.events[eventName] = this.events[eventName].filter(function (item) {
			return item.listener !== listener;
		});
	}
};

/**
 * 根据事件类型获取监听器列表
 */
ep.listeners = function (eventName) {
	if (!this.events[eventName]) {
		return [];
	}
	let arr = [];
	this.evnets[eventName].forEach(function(item) {
		arr.push(item.listener);
	});
	return arr;
};

/**
 * 获取监听器数量
 */
ep.listenerCount = function (eventName) {
	if (!this.events[eventName]) {
		return 0;
	}
	return this.events[eventName].length;
};

/**
 * 事件类型名称列表
 */
ep.eventNames = function () {
	if (this.events) {
		return [];
	}
	let arr = [];
	for (let e in this.events) {
		arr.push(e);
	}
	return arr;
};

module.exports = EventObj;
