//function add(x,y){
// return x+y;
//}
//和普通函数的区别在哪？
//构造函数的过程 构造函数 constructor
function Person(name,age){
    this.name = name;
    this.age = age;
}

const wen = new Person('wen',18);
console.log(wen.name,wen.age);
const chen = new Person('chen',18);
console.log(chen.name,chen.age);