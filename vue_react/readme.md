- 余说 react 学习路径
  - react 基础语法过一遍（B站|文档）
  - hooks 相关
  - 全家桶
  - 状态管理
  - react 源码
  - Antd ...
  - ts

- AI Coding
  - VUE & React 一起搞
  - 自然语义编程
    tailwindcss 语义
    antd 组件 

  - 给一张设计稿 -> 生成相关组件

- http（CDN 更快） 引入 前端组件库 
  - Vue
    Vue

- 挂载点
  将前端工作交给Vue/ react，在html中只需要一个**挂载**点 #root

  挂载Vue App 应用实例

- vue 开发哲学 让我们focus 业务的现代前端框架
  - html界面上升到应用的复杂，现在前端复杂
  - web 应用是数据驱动的界面
  - vue 事件机制 就在元素上 方便 @event="handler"
  - 响应式编程
    - ref(0) 包装简单数据类型成为响应式对象
    - .value ="" 修改value 值改变的同时，界面热更新（局部更新）
    - 规避DOM 编程
    - 不在为API 编程，而focus 业务（数据）开发 
- App 和传统编程的区别
  - createApp 来创建应用实例（Vue App）
  - #root 结合
  - #root 节点里面是Vue的世界
    {{count}}
- {{}} Vue 的数据占位符
  可以改变的 
  放数据 不需要document.querySelector("")
  {{ data }}
  在setup（）{{
    return{
        data
    }
  }}