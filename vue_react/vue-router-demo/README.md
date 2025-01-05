# vue 全家桶之 vue-router 路由

- vue 语法 主要是组件（vue2 选项式/ Vue3 组合式 适合大型项目 200行）、响应式、生命周期、指令（v-bind: v-model、v-for、v-if\v-show）、三种数据（自有数据ref、props、computed）
  只做最核心的
- vue-router 路由 vue 周边生态
  - 跳转到其他页面 路由
  - 
- vuex/pinia 状态管理

## vue-router 路由
- 将接管路由，像交警一样
- router-link 取代a标签
  a 标签
  router-link 组件包含a 的功能，路由对应的组件显示到相应的位置
  要启用，
  组件没有生效 无法识别的组件 降级成为div元素
  - 向vue 添加vue-router 插件

- router 有专门的目录
  - index.js 入口配置文件
  - router-link 是vue-router 提供的组件，ues（router） 不用引入就可以生效

- 业务熟练度
  - vue router 语法细节
    - routes 拆分 亮点
      [
        /
        /About 顶级路径，
        ...users //用户模块
        ...posts //文章模块
      ]
      展开运算符
     - path，component
       - name   有大用
       - props   给路由传递参数

- 路由历史记录 history
  router-link 而不是a 要实现组件功能
  只需要router.push() 入栈
  栈顶是当前路由页面，显示组件
  能前进，后退，
  导航 = url + history navigator

- 实战开发
  - stylus
    加速css 开发
    npm i -D stylus 当前项目安装stylus 包
    省略{} ： ； 用 tab 缩进代替