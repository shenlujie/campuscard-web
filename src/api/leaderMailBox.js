import request from '@/utils/request'

export function sendMail (stId, title, content) {
  return request({
    url: '/leaderMailBox/add',
    method: 'post',
    data: {
      stId,
      title,
      content
    }
  })
}

export function getMail (id) {
  return request({
    url: '/leaderMailBox/listByCondition',
    method: 'get',
    params: {
      id
    }
  })
}
