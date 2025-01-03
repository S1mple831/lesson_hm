// 路由配置文件
import {
    createRouter, // 创建路由实例
    createWebHashHistory // 创建路由模式
} from 'vue-router' // vue插件
// 页面级别组件放到views文件夹下
import Home from '../views/Home.vue' // 引入Home组件
import About from '../views/About.vue' // 引入About组件
// posts 是模块 posts 文件夹
import PostIndex from '../views/post/index/post-index.vue' // 引入PostIndex组件
import PostShow from '../views/post/show/post-show.vue' // 引入PostShow组件

// 路由配置
const routes = [
{
    path: '/', // 路由路径
    component: Home // 路由组件
},
{
    path: '/about', // 路由路径
    component: About // 路由组件
},
{
    path: '/posts', // 路由路径
    component: PostIndex // 路由组件
},
{
    path:'/posts/:postId', // 动态路由
    component:PostShow
}
]
// 提供路由对象实例
const router = createRouter({  // 创建路由
    history: createWebHashHistory(), // 路由模式
    routes // 路由配置数组
})

export default router // 导出路由实例