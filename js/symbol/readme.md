# Symbol

- 唯一值 独一无二
  - 用Symbol 函数来申明
  - 给一个label 可选
  - 返回值是唯一值
  - 常用于对象字面量 不会，不需要担心会被覆盖
    key 的用法 这也是Symbol 需要的原因， 
    在大厂大型项目，对象复杂，难维护，多人协作

- Object.keys() 静态方法 不在.prototype上 对象的键名数组，但不包括Symbol 类型的键名
- Object.values() 对象的键值数组，但不包括Symbol 类型的键值
- Object.entries() 对象的键值对数组，但不包括Symbol 类型的键值对
Object 是所有对象的底类对象，它提供所有对象所共有的方法。
classMates.keys() 为什么会报错  它不是Object.proytype上的方法，所以会报错

- 可迭代对象
  通过Object.getOwnPropertyDescriptors(classMates) 可以查看所有的属性 对象上的属性描述符
  - 虽然 symboles emumberable 属性为true 但仍不可枚举
    因为Symbols 设计独特， 就是提供唯一值，只能通过getOwnPropertySymbols() 获取

- ownProperty？ 是自己的 不是原型链上的