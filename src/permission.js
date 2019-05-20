import router from './router'
import { getToken } from '@/utils/auth'
import Vue from 'vue'
import iView from 'iview'
Vue.use(iView)

router.beforeEach((to, from, next) => {
  iView.LoadingBar.start()
  if (getToken()) {
    if (to.path === '/login') {
      next({path: '/'})
      iView.LoadingBar.finish()
    } else {
      next()
    }
  } else {
    next()
  }
})

router.afterEach(() => {
  iView.LoadingBar.finish() // 结束Progress
})
