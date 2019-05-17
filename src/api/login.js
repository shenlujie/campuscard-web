import request from '@/utils/request'

export function login (stNum, stPassword) {
  return request({
    url: '/frontUserStudent/login',
    method: 'post',
    data: {
      stNum,
      stPassword
    }
  })
}

export function getInfo () {
  return request({
    url: '/frontUserStudent/getInfo',
    method: 'get'
  })
}
