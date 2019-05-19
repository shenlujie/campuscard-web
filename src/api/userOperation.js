import request from '@/utils/request'

export function submitOperation (stId, apply) {
  return request({
    url: '/campusCardOperation/add',
    method: 'post',
    data: {
      stId,
      apply
    }
  })
}

export function getOperation (stId) {
  return request({
    url: '/campusCardOperation/listById',
    method: 'get',
    params: {
      stId
    }
  })
}
