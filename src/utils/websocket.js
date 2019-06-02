import store from '../store'

const stNum = store.getters.userInfo.stNum
const webSocketClient = 'ws://localhost:8090/client/' + stNum

// 实例化webSocket对象
let webSocket = null
if ('WebSocket' in window) {
  webSocket = new WebSocket(webSocketClient)
  // 连通之后的回调事件
  webSocket.onopen = function () {
    console.log('已经连通了websocket')
  }
  // 接收后台服务端的消息
  webSocket.onmessage = function (evt) {
    let receivedMsg = evt.data
    console.log('数据已接收:' + receivedMsg)
    window.receiveMessage(receivedMsg)
  }

  // 连接关闭的回调事件
  webSocket.onclose = function () {
    console.log('连接已关闭...')
  }
} else {
  // 浏览器不支持 WebSocket
  alert('您的浏览器不支持 WebSocket!')
}

// 发送消息
export function handleSend (message) {
  webSocket.send(message + ' ' + stNum)
}
