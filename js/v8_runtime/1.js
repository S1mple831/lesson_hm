// hoisting
console.log(a,func);
console.log(b);//词法环境中的变量或常量，在申明之前不可访问 
//暂时性死区  TDZ
var a =1;
function func(){

}
let b =2;
b++;//词法环境查找b