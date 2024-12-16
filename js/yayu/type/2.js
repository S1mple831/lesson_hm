// false | true 
// Primitive -> Boolean 显示类型转换
// JS 简单数据类型都有构造函数类型 当成构造函数来用
console.log(Boolean())// 默认值为false
console.log(Boolean(false))
console.log(Boolean(true))
console.log(Boolean(undefined))// false
console.log(Boolean(null))// false
console.log(Boolean(+0),'+0')/// false
console.log(Boolean(-0),'-0')// false
console.log(Boolean(NaN),'NaN')// false 非数字
console.log(Boolean(""),'""')// false