# VUE + REACT CLI 命令行

- vue-cli command line
  - 比较复杂的大型项目， 不是简单的页面开发
    web app ，而非page
- npm init vite
  vite  帮助我们快速构建前端项目   前端项目构建工具   前端基建工具（工程化的核心套件）
  npm init 初始化项目 将初始化交给vite 这个工程化巨佬
  - 标准项目模版
    -  没必要每次都搞

  - 项目的结构
    - 先看package.json
      依赖
      - vue 3^ 是开发和上线了都需要的
      - vite  是开发阶段才需要的 打包上线的时候不需要（前端基建） vite 是包工头

    - 工程的不同生命周期（阶段）
      - dev 开发阶段
      - test 测试阶段
      - build 打包上线阶段（进行时）
      - online 运营维护

  - npm run dev  vite
    - 使用http协议 在5173端口  找到根目录的index.html 
      - 首页 website
      - 应该有一个挂载点 #app
      - src/main.js 逻辑入口文件

  - src/main.js
    - src 是开发目录
      以后开发的主战场
    - main.js 是入口文件
      createApp().mount("#app")  创建一个新的 Vue 应用实例。将这个实例挂载到 id 为 app 的 DOM 元素上。
    - App.vue 在src目录下
      .vue 是vue的文件专属后缀名
      - 三段式
        - <template>  模板 负责结构 {{}}
        - <script>  逻辑
          声明响应式
          事件声明
          ......
        - <style>  样式

    - .vue 太好 跟胶囊一样
    - 组件就是 >html的 页面构建模块
      组件是现代前端的开发新单元（比html大）
      组件 = 由一堆逻辑单元的html构成 + css + js （汉堡包.vue 文件）
      某项组件是对某项功能的抽象

    - 现代前端拥抱组件思维， vue前端组件库
    - 组件按功能划分
    - 组件 = html（一堆） + css（一堆） + js（一堆）
    - .vue 三段式组合这个组件
    - 轮播图 功能属性凸显 经典组件
    - 前端的开发单位是组件，不是页面（重复 轮播图）
      不能以html 为单位？ 单个功能弱 
    - 从工程化角度理解组件
      - 按功能化划分， 好安排工作（像流水线）
      - 组件可以复用（.vue） import 引入
      - 好维护
    - 组件以标签的方式嵌入页面
    - 可读性非常好