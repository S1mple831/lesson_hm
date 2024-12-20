FIFO Queue

- typeof 
  数据变量存储的二进制 前三位 000 表示对象 010表示函数 100表示字符串 001表示数字 110表示布尔值 111表示Symbol 1表示整数 0表示浮点数 undefined 011 null 000（早期历史遗留问题）

- Object.prototype.toString.call() 获取一个对象的内部类（[object Object]）

- substring slice
  第二个参数 不一样
  slice 是左闭右开 第二个参数endIndex  不包括但支持负数 更灵活
  substring 是左闭右闭 第二个参数endIndex  不包括 不支持负数 只取正数 如果 startIndex 大于 endIndex，则它们的作用会互换
  slice更优