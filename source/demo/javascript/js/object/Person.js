function Person() {
}

Person.prototype.setName = function(name) {
	this.name = name;
}

Person.prototype.getName = function() {
	return this.name;
}

Person.prototype.setAge = function(age) {
	this.age = age;
}

Person.prototype.getAge = function() {
	return this.age;
}

Person.prototype.setSex = function(sex) {
	this.sex = sex;
}

Person.prototype.string = function() {
	console.log('name: ', this.name, 'age: ', this.age, 'sex: ', this.sex);
}

module.exports = Person;
