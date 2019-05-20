import request from '@/utils/request'

export function changePsw (stNum, curPsw, newPsw, reNewPsw) {
  return request({
    url: '/frontUserStudent/changePsw',
    method: 'post',
    data: {
      stNum,
      curPsw,
      newPsw,
      reNewPsw
    }
  })
}
