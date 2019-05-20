import Vue from 'vue'
import Router from 'vue-router'
// 导入布局
import Layout from '../views/layout/index'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/login',
      component: () => import('@/views/login/index')
    },
    {
      path: '/',
      component: Layout,
      redirect: '/home',
      children: [
        {
          path: 'home',
          name: 'home',
          component: () => import('@/views/homePage/index')
        },
        {
          path: 'intro',
          name: 'intro',
          component: () => import('@/views/intro/index')
        },
        {
          path: 'rule',
          name: 'rule',
          component: () => import('@/views/rule/index')
        },
        {
          path: 'guide',
          name: 'guide',
          component: () => import('@/views/guide/index')
        },
        {
          path: 'announcement',
          name: 'announcement',
          component: () => import('@/views/announcement/index')
        },
        {
          path: 'announceDetail/:id',
          name: 'announcementDetail',
          component: () => import('@/views/announcementDetail/index')
        },
        {
          path: 'lost',
          name: 'lost',
          component: () => import('@/views/lost/index')
        },
        {
          path: 'consume_detail',
          name: 'consume_detail',
          component: () => import('@/views/consume_detail/index')
        },
        {
          path: 'reissue_card',
          name: 'reissue_card',
          component: () => import('@/views/reissue_card/index')
        },
        {
          path: 'chat_online',
          name: 'chat_online',
          component: () => import('@/views/chat_online/index')
        },
        {
          path: 'leader_mail',
          name: 'leader_mail',
          component: () => import('@/views/leader_mail/index')
        },
        {
          path: 'contact_us',
          name: 'contact_us',
          component: () => import('@/views/contact_us/index')
        },
        {
          path: 'personHome',
          name: 'personHome',
          component: () => import('@/views/personHome/index')
        },
        {
          path: '404',
          name: 'notfound',
          component: () => import('@/views/404')
        }
      ]
    },
    {path: '*', redirect: '/404', hidden: true}
  ]
})
