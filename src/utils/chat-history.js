import store from '../store'

const curStNum = store.getters.userInfo.stNum
const curStName = store.getters.userInfo.stName

// 当发送消息或者接收到消息时，将聊天记录存储到localStorage
export function saveCurMessageToLocalStorage (type, message) {
  let curMessageString = window.localStorage.getItem(curStNum + curStName)
  if (curMessageString !== null) {
    curMessageString += message + ' ' + type + ',|'
    window.localStorage.setItem(curStNum + curStName, curMessageString)
  } else {
    window.localStorage.setItem(curStNum + curStName, message + ' ' + type + ',|')
  }
}
