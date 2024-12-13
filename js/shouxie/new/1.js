function Person(name,age){
    this.name = name;
    this.age = age;
}

Person.prototype.sayName = function(){
    console.log(this.name);
}  
// new 是实例化运算符
// 1.创建一个空对象（实例）{}  和Person 没有血缘关系
// {} __proto__ -> Object.prototype
// 2.手动的__proto__ -> Person.prototype
// 3.构造函数的执行 this ->{},给{}赋值
const awei = new Person('awei',20);