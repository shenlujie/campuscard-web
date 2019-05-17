import axios from 'axios'
import store from '../store'
import {getToken} from '@/utils/auth'

// 创建axios实例
const service = axios.create({
  baseURL: process.env.BASE_API,
  // 请求超时时间
  timeout: 15000
})

// 添加请求拦截器
service.interceptors.request.use(
  config => {
  // 在发送请求之前做些什么
    console.log('request拦截成功')
    console.log(store.getters.token)
    if (store.getters.token) {
      config.headers['Authorization'] = getToken()
    }
    return config
  }, error => {
  // 对请求错误做些什么
    console.log('请求存在错误: ' + error)
    return Promise.reject(error)
  })

// 添加响应拦截器
service.interceptors.response.use(
  response => {
  // 对响应数据做点什么
    const res = response.data
    console.log(res)
    if (res.code === 401 || res.code === 403) {
      this.$Modal.confirm({
        title: '确认对话框标题',
        content: '<p>你已被登出，可以取消继续留在该页面，或者重新登录</p><p>确认登出？</p>',
        okText: '重新登录',
        cancelText: '取消',
        onOk: () => {
          this.$Message.info('点击了确定')
          store.dispatch('FedLogOut').then(() => {
            // 为了重新实例化vue-router对象 避免bug
            location.reload()
          })
        }
      })
      return Promise.reject(res.msg)
    }
    return response
  }, error => {
  // 对响应错误做点什么
    console.log(error.message)
    return Promise.reject(error)
  })
export default service
