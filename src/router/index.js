import Vue from 'vue'
import Router from 'vue-router'
// 导入布局
import Layout from '../views/layout/index'

Vue.use(Router)

export default new Router({
  routes: [
    {path: '/login', component: () => import('@/views/login/index')},
    {
      path: '/',
      component: Layout,
      redirect: '/home',
      children: [
        {
          path: 'home',
          name: 'home',
          component: () => import('@/views/homePage/index'),
          meta: {title: '首页', icon: 'home'}
        },
        {
          path: 'intro',
          name: 'intro',
          component: () => import('@/views/intro/index'),
          meta: {title: '简介', icon: 'intro'}
        },
        {
          path: 'rule',
          name: 'rule',
          component: () => import('@/views/rule/index'),
          meta: {title: '条例', icon: 'rule'}
        },
        {
          path: 'guide',
          name: 'guide',
          component: () => import('@/views/guide/index'),
          meta: {title: '指南', icon: 'guide'}
        },
        {
          path: 'announcement',
          name: 'announcement',
          component: () => import('@/views/announcement/index'),
          meta: {title: '公告', icon: 'announcement'}
        },
        {
          path: 'announceDetail/:id',
          name: 'announcementDetail',
          component: () => import('@/views/announcementDetail/index'),
          meta: {title: '公告详情', icon: 'announcementDetail'}
        },
        {
          path: 'lost',
          name: 'lost',
          component: () => import('@/views/lost/index'),
          meta: {title: '失卡招领', icon: 'lost'}
        },
        {
          path: 'consume_detail',
          name: 'consume_detail',
          component: () => import('@/views/consume_detail/index'),
          meta: {title: '消费记录', icon: 'consume_detail'}
        },
        {
          path: 'reissue_card',
          name: 'reissue_card',
          component: () => import('@/views/reissue_card/index'),
          meta: {title: '补卡', icon: 'reissue_card'}
        },
        {
          path: 'chat_online',
          name: 'chat_online',
          component: () => import('@/views/chat_online/index'),
          meta: {title: '在线咨询', icon: 'chat_online'}
        },
        {
          path: 'leader_mail',
          name: 'leader_mail',
          component: () => import('@/views/leader_mail/index'),
          meta: {title: '领导信箱', icon: 'leader_mail'}
        },
        {
          path: 'contact_us',
          name: 'contact_us',
          component: () => import('@/views/contact_us/index'),
          meta: {title: '联系我们', icon: 'contact_us'}
        },
        {
          path: 'personHome',
          name: 'personHome',
          component: () => import('@/views/personHome/index'),
          meta: {title: '个人中心', icon: 'personHome'}
        },
        {
          path: '404',
          name: 'notfound',
          component: () => import('@/views/404'),
          meta: {title: '404', icon: '404'}
        }
      ]
    },
    {path: '*', redirect: '/404', hidden: true}
  ]
})
