import { createApp } from 'vue'
import App from '@/App.vue'
import router from './router'
import store from './store'
// 通用字体
import 'vfonts/Lato.css'
// 等宽字体
import 'vfonts/FiraCode.css'
// 自定义通用样式
import './index.css'

createApp(App)
.use(router)
.use(store)
.mount('#app')
