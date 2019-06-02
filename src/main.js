// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import '@/permission'
// 导入全局样式
import './styles/global/index.css'
// 导入bootstrap样式
import './styles/lib/bootstrap/css/bootstrap.min.css'
// 导入聊天框样式
import './styles/global/chat.css'
// 全盘导入iview组件
import iView from 'iview'
import 'iview/dist/styles/iview.css'
Vue.use(iView, {
  transfer: true,
  size: 'large',
  select: {
    arrow: 'md-arrow-dropdown',
    arrowSize: 20
  }
})
// 全局设置iview的Message的样式
Vue.prototype.$Message.config({
  top: 80,
  duration: 2
})
/*
按需加载方式
import 'iview/dist/styles/iview.css'
import { Button, Table } from 'iview'
Vue.component('Button', Button)
Vue.component('Table', Table)
*/
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
