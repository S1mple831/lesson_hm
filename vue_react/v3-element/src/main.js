import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import {
  ElButton,
  ElForm,
  ElFormItem,
  ElInput
} from 'element3'
import 'element3/lib/theme-chalk/index.css'
import router from './router'
import {createPinia} from 'pinia'

createApp(App)
   .use(router)
   .use(createPinia())
   .use(ElButton) // 使用UI组件库 开发效率提升了
   .use(ElForm)
   .use(ElFormItem)
   .use(ElInput)
   .mount('#app')