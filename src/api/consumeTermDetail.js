import request from '@/utils/request'

export function getConsumeTermDetail (page, limit, stNum) {
  return request({
    url: '/consumeTermDetail/listById',
    method: 'get',
    params: {
      page,
      limit,
      stNum
    }
  })
}
