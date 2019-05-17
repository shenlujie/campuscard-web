import request from '@/utils/request'

export function introRead () {
  return request({
    url: '/file/introRead',
    method: 'get'
  })
}

export function guideRead () {
  return request({
    url: '/file/guideRead',
    method: 'get'
  })
}

export function announcementRead (page, limit) {
  return request({
    url: '/campusCardAnnouncement/list',
    method: 'get',
    params: {
      page,
      limit
    }
  })
}

export function announcementDetail (id) {
  return request({
    url: '/campusCardAnnouncement/detail',
    method: 'get',
    params: {
      id
    }
  })
}

export function ruleRead () {
  return request({
    url: '/campusCardRule/list',
    method: 'get'
  })
}
