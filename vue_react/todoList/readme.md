# vue 哲学

- 前端刀耕火种的年代  前端的原始社会
  - 开发思想
    底层API DOM编程 + 事件机制
    缺点 复杂
    性能差 （频繁访问，修改DOM）
    V8引擎（JS，单线程）负责交互 + 渲染引擎（html + css）先加载静态元素
    以快速显示页面为第一要务  html + css 渲染引擎 独立于JS引擎
    v8 引擎 独立的  从V8引擎到渲染引擎，犹如上高速，较远

    vue（登记） 批量收集DOM更新， 减少没必要的跑路

- jquery 封建社会
  js 框架，DOM 操作变得简单
  $ 等封装简化了JS开发（对开发者优化）

 -  web 1.0(csdn blog) -> 2.0(twitter,facebook)
  JS 代码量增大， 性能排在第一位


- 演变到VUE / REACT 现代前端框架 当代社会
  更关注于业务开发（数据 响应式、组件化）， 不用在意JSDOM的底层，框架封装了

  利用数据思维 + vue/react 实现方式  = 前端开发

- data title
- vue提供给专注于业务的语法 v-model 双向绑定
  - data 里面输入一个 title 在input.value 使用
  - 同时 input 输入了后 data 里面的 title 也会改变

  - todos 应用
    - todos 是数据项
    - title  有什么任务 
    - @keydown.enter 回车事件 @event vue 事件监听
      .enter 事件修饰符 让事件业务更快
    - 动态样式业务 
      ： 动态绑定 v-bind：的缩写 
      ：class="{}" 双引号内部是Js 运行区域
      {done:todo.done}