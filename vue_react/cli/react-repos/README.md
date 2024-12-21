# react repos 项目列表

- 用户的仓库列表
  - 开发repos 组件

- react 组件 在components目录下
  - .vue , .jsx  组件
  - components/ -> 挂载App.jsx
  - 相比于vue的三部分清晰明了 react 函数即组件
    - 首字母大写
    - 返回一段html模版， JSX

- vue 和 react 相同点/不同点
  - 都使用组件化思想
  - 现代前端编程框架 挂载点
  - 都有工程化配套
  - 数据绑定{{}} {} 在模版绑定
  - 响应式，数据驱动，不需要做DOM 耗性能操作

  - 区别
    - .vue .jsx
    - template/script/css 三段式 函数即组件
    - vue好入门，api丰富，  react 难，但纯粹（JS高手）
    - vue css 在组件内部，react css 单独文件
    - 组件 = 组（html + css + js）和完成一件功能的拆分
    - vue template , react JSX
      - JSX 是react 最漂亮的部分 ， 在函数中， 最方便的表达UI部分
        本身不可以的，但是react会解析JSX html（XML） in JS
      - 不能写class，用className 代替

  - 组件类
    - 封装一个组件  import + export default 完成功能的拆分
    - 用函数（构造）组件 ， return html 是必须的
    - 组件可以复用
    - 封装的是UI + 响应式数据
    - 只要写原生JS 就可以了