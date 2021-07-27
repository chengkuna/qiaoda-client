import { createRouter, createWebHashHistory } from 'vue-router'
import LocalStorage from '@/utils/storage'
import routes from './routes'

const Storage = new LocalStorage()

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

router.beforeEach((to, from, next)=> {

  const token = Storage.get('token')
  
  if (!token && to.name !== 'login') {
    // 如果无token 并且 当前页面不是login页面，重定向到登录页面
    next({name: 'login'})
  } else if (token && to.name === 'login') {
    // 如果有token 并且 当前页面是login页面，重定向到首页
    next({name: 'home'})
  } else {
    next()
  }
})

export default router