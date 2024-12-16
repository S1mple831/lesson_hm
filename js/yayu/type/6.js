var a=1.234;
console.log(typeof a,a.toFixed(2));
var b = new Number(a);
// valueof 方法 把对象转换成基本数据类型 
console.log(typeof b);
console.log(b.toFixed(2));