# LocalStorage 本地存储

- 以上哪些属于html5 特性
  - <!DOCTYPE html>  文档头 文档类型 html5
  - <meta name="viewport" content="width=device-width, initial-scale=1.0">
      user-scalable=no 禁止用户缩放
    - 移动时代早期，在早期网页是以PC端为主，可以缩放页面
    - 不是很好的体验，一般不太需要了
    - 现在以移动端为主，PC工作用
    - <meta data-n-head="ssr" name="viewport" content="width=device-width, initial-scale=1, user-scalable=no, viewport-fit=cover">
  - 表单 placeholder required 等改善功能
    placeholder 属性提供了一种提示信息的方式，它会在输入框为空时显示一段简短的文本，用来说明用户应该在此处输入什么样的内容。一旦用户开始在该字段中输入，这段提示文本就会消失。
    required 属性指定了输入字段是必填项，即用户必须填写此字段才能成功提交表单。如果未填写，浏览器会阻止表单提交，并通常会给出一个默认的错误提示。

- js性能
  - JS DOM 编程是最耗费性能的一件事（查找和修改）
  - 不写DOM 写vue
  - this.querySelector() 缩小了查找范围
    dom,还有任何父节点都可以 用querySelector
  - 性能优化是态度

- 代码风格
  - 事件处理函数 用函数名占位 提升代码的可读性，
    函数名可读，如果不这样，就要看代码了。
  - es6 对象字面量， key：value 同名，可以： +省略右边
  - 函数就应该专注一个功能，不过十行
    - 多拆分函数
    - 方便复用
    - 可读性好
    - 代码行数太多 会像水里憋气一样，太难受了

- html5 localStorage 本地存储
  - 为了记住网页的一些状态 ，浏览器开辟了5mb左右的存储空间给我们使用
  - localStorage setItem getItem 都是key：value 存储 
  - 使用JSON.stringify() 和 JSON.parse() 来序列化(存进去必须是字符串)和反序列化数据。