function getAge() {
	var y = new Date().getFullYear();
	return y - this.birth;
}

var xiaoming = {
	name: '小明',
	birth: 1990,
	age: getAge
};

//var fn = xiaoming.age;
//console.log(fn());
console.log(xiaoming.age());
