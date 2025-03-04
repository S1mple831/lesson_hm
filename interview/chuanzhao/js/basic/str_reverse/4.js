// 高阶函数
//函数的参数或返回值是一个函数，就叫做高阶函数
function reverseStr(str) {
   // return [...str].reverse().join('');
   // reduce es6 api
   // reduce(callback,initValue)
   return [...str].reduce((reversed,char) => char + reversed,'')
  }