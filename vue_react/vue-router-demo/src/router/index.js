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
import PostMeta from '../views/post/show/components/post-meta.vue' // 引入PostMeta组件

// 文章模块 既实现了复杂应用 
const postRoutes = [
    {
        path: '/posts', // 路由路径
        name:'postIndex', // 路由名称
        component: PostIndex, // 路由组件
        //路由向页面级别组件传递数据
        props:{
            sort: 'popular' // 传递给组件的props
        },
        meta: {
            title:'文章列表'
        }
    },
    {
        path:'/posts/:postId', // 动态路由
        component:PostShow,
        name:'postShow',
        props: true,// 开启props传参
        // 子路由，路由的嵌套
        children: [
            {
                path:'meta', // 子路由路径
                component: PostMeta // 子路由组件
            }
        ],
        meta: {
            title:'文章详情'
        }
    }
]
// 路由配置
const routes = [
{
    path: '/', // 路由路径
    component: Home, // 路由组件
    meta:{
        title: '首页'
    }
},
{
    path: '/about', // 路由路径
    meta:{
        requireAuth: true,
        title: '关于'
    },
    name:'about', // 路由名称
    component: About // 路由组件
},
...postRoutes // 展开数组
]
// 提供路由对象实例
const router = createRouter({  // 创建路由
    history: createWebHashHistory(), // 路由模式
    routes // 路由配置数组
})

// 路由守卫
// 每次路由的切换都会执行这个回调函数
router.beforeEach((to, from, next) => {
    document.title = to.meta.title || '智谱华章'; // 动态修改标题
    // to 目标路由对象
    // from 离开的路由对象
    // router + routes 构成路由
console.log(to,from,'-----------');
if (to.meta.requireAuth){
    //console.log('需要登录');
    // 传入url ，redirect 跳转到登录页面
    next('/login'); // 跳转到登录页面
}
next(); // 必须调用next方法，否则路由不会跳转 放行
})

// 路由跳转之前

export default router // 导出路由实例