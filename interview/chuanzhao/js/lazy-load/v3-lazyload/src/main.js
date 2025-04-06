import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import lazyLoad from './directives/lazyLoad.js'

const app = createApp(App)
// 注册全局指令
App.directive('lazy', lazyLoad)
app.mount('#app')
