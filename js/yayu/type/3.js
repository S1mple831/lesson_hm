console.log(1 / +0) // 正无穷大
console.log(1 / -0) // 负无穷大
console.log(Object.is(5, 5));
console.log(Object.is(+0, -0));
// 隐式类型转换
// NaN Not a Number -> 
console.log(2 * 'a',2 + 'a');// 2a NaN
console.log(typeof NaN);// number
console.log(parseInt('abc'));// NaN
console.log(parseInt('12abc'))//12
console.log(NaN === NaN)// 不代表确切值， 
// 不能通过===NaN 去判断， 所以要isNaN
console.log(isNaN(NaN),isNaN(parseInt('abc')))//isNaN() 是 JavaScript 中的一个全局函数，用于检查其参数是否为 NaN