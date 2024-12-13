function Person(name,age){
    this.name = name;
    this.age = age;
}

Person.prototype.sayName = function(){
    console.log(this.name);
}  

function objectFactory(){
    console.log(arguments,arguments.length);
const obj = new Object();//空对象创建
//arguments 是类数组，没有shift 方法
//[].shift .call()可以指定（）内部使用shift 方法
const Constructor =[].shift.call(arguments);// 
 //arguments[0];类数组 argument 指代调用时有哪些参数
 console.log(Constructor);
 obj.__proto__ = Constructor.prototype;
 Constructor.apply(obj,arguments);
 console.log(obj);
 return obj;
}
//prototype 是构造函数的一个属性，用于指定其创建的对象将继承的属性和方法；
//而 __proto__ 则是实例对象的一个属性，指向其构造函数的 prototype，用来查找那些不在自身上定义的属性和方法。
// obj 和awei 是引用关系
let awei = objectFactory(Person,'awei',18)
console.log(awei.name);
awei.sayName();