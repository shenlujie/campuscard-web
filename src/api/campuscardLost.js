import request from '@/utils/request'

export function publishLost (upStNum, lostStNum, lostStName, cardPic, foundTime, upStTel, status) {
  return request({
    url: '/campusCardLost/add',
    method: 'post',
    data: {
      upStNum,
      lostStNum,
      lostStName,
      cardPic,
      foundTime,
      upStTel,
      status
    }
  })
}

export function getLost (page, limit, status) {
  return request({
    url: '/campusCardLost/listByCondition',
    method: 'get',
    params: {
      page,
      limit,
      status
    }
  })
}
