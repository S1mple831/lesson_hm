//基本数据类型间的显示类型转换之Number
// Number
console.log(Number())// 0
console.log(Number(undefined))// NaN 未定义 无法转换 undefined 在数值上下文中没有转换成一个特定数字的含义
console.log(Number(null))// 0 定义了 为空
console.log(Number(false))// 0 在数值上下文中，false 被转换为0
console.log(Number(true))// 1
console.log(Number('123')) // 123
console.log(Number('-123'))// -123
// 进制转换 16进制
console.log(Number('0x11'))// 17
console.log(Number(''),Number(""))// 0 0
console.log(Number('100a'))// 100