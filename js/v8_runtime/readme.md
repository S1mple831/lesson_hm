- 变量提升怎么来的
  - 调用栈是js 的执行机制
  - 入栈的是执行上下文
    - 栈底是全局执行上下文
    - 其余的都是函数 以函数为单位入栈
      - 块级作用域 栈的结构来维护

## 变量提升这个坏问题
- es6 通过 let/const 词法环境跟变量环境分开，区别对待
- 变量申明前 处于 暂时性死区 不能访问


## 词法作用域
  作用域 是变量查找的规则
  词法作用域 函数定义在哪个域中 就是词法作用域

调用栈 执行上下文 变量环境和词法环境 作用域 块级作用域 词法作用域（编译 通过outer指向） 作用域链（查找变量的轨迹）

- 作用域链 简单理解 冒泡 从内到外，全局，
  - 在函数中， 考虑 词法作用域 outer 指向谁