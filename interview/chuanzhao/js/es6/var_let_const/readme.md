- 作用域
  var 不支持块级作用域，let 和 const 可以，这时js 满足大型项目的一个需求。
- 变量提升
  var 存在变量提升并初始值为undefined，let 和 const 会提升但是有暂时性死区（TDZ）
  在声明前访问会报 referenceError
- 重复声明
  var 可以重复声明，let 和 const 不可以重复声明
- 全局污染
  var 挂载window上，let 和 const 不会
- 修改性
  var 和 let 可以修改，const 声明的敞亮不可以修改，但如果是对象或者数组，可以修改对象的属性