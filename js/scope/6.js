// ReferenceError: a is not defined 引用错误
// RHS 查找 失败的时候，会爆出 ReferenceError 错误，报错
function foo(a) {
    console.log(a + b);
    b = a;
}

foo(2);