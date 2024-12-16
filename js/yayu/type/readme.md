# js 类型转换

- es6 之前，js有多少种类型？ 6种，
  - 简单数据类型，primitive 原始数据类型，拷贝式赋值
    - Number
    - String
    - Boolean
    - Null
    - Undefined
  - 复杂数据类型，reference 引用数据类型，引用式赋值
    - Object

- 为何JS 类型会改变？
  Number（"1"）

- JS 是弱类型语言
- 变量的类型是可以改变的
- 搞清楚变量的确切类型 ，大圣来了
  - primitive 类型 -> 其他类型的转换
    - Boolean
  - Object 类型 ->  其他类型的转换


- Boolean 显示类型转换(构造函数)规则
  - 为false 的情况
    - 为空 false
    - 直接参数为 false
    - undefined
    - +0
    - -0
    - NaN
    - null
    - ""

  - true

- +0 -0
  Object.is() 判断是否相等
  1/+0,1/-0 Infinity -Infinity
- NaN  表示非数字  用于表示一个本应是数值的操作未能产生合法的数值结果
  类型任然是Number，表示一个特殊的数字 Not a Number

- Nmuber() 国际转换规范 
  0 1 NaN 

- String()