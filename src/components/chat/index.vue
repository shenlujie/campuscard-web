<template>
  <div class="chat">
    <div class="top">管 理 员</div>
    <div class="lite-chatbox" ref="chatBox">
      <Divider>{{ curTime | formatDate }}</Divider>
    </div>
    <div class="bottom">
      <Row>
        <Col span="22">
          <input type="text" class="form-control" v-model="rightMessage" @keyup.enter="sendMessage" placeholder="输入内容">
        </Col>
        <Col span="2">
          &nbsp;&nbsp;&nbsp;&nbsp;
          <button class="btn btn-primary mb-2" @click="sendMessage">发送</button>
        </Col>
      </Row>
    </div>
  </div>
</template>

<script>
import { handleSend } from '@/utils/websocket'
import { saveCurMessageToLocalStorage } from '@/utils/chat-history'
export default {
  data () {
    return {
      curTime: new Date(),
      stNum: this.$store.getters.userInfo.stNum,
      stName: this.$store.getters.userInfo.stName,
      rightMessage: ''
    }
  },
  mounted () {
    // 与websocket中onmessage方法建立联系，能够接收到websocket的消息
    window.receiveMessage = this.receiveMessage
    // 从localStorage中将消息取出渲染至聊天框
    let rawString = window.localStorage.getItem(this.stNum + this.stName)
    if (rawString !== null) {
      let realMessageString = rawString.substring(0, rawString.length - 2)
      let messageArray = realMessageString.split(',|')
      for (let i = 0; i < messageArray.length; i++) {
        let type = messageArray[i].substring(messageArray[i].lastIndexOf(' ') + 1)
        let message = messageArray[i].substring(0, messageArray[i].lastIndexOf(' '))
        this.renderChatContent(type, message)
      }
    }
  },
  methods: {
    renderChatContent (type, message) {
      if (type === 'send') {
        this.$refs.chatBox.innerHTML +=
          '<div class=\'cright cmsg\'>\n' +
          '   <span class=\'name\'><span class=\'htitle admin\'>用户</span>' + this.stName + '</span>\n' +
          '   <span class=\'content\'>' + message + '</span>\n' +
          '</div>'
      }
      if (type === 'reception') {
        if (message === '管理员当前不在线') {
          this.$refs.chatBox.innerHTML +=
            '<div class=\'tips\'>\n' +
            '  <span class=\'tips-danger\'>系统消息：' + message + '</span>\n' +
            '</div>'
        } else {
          this.$refs.chatBox.innerHTML +=
          '<div class=\'cleft cmsg\'>\n' +
          '   <span class=\'name\'><span class=\'htitle owner\'>管理员</span> admin</span>\n' +
          '   <span class=\'content\'>' + message + '</span>\n' +
          '</div>'
        }
      }
      this.$refs.chatBox.scrollTop = this.$refs.chatBox.scrollHeight
    },
    sendMessage () {
      // websocket发送消息
      handleSend(this.rightMessage)
      // 聊天框渲染消息
      this.renderChatContent('send', this.rightMessage)
      // localStorage存储消息
      saveCurMessageToLocalStorage('send', this.rightMessage)
      // 将输入框清空
      this.rightMessage = ''
    },
    receiveMessage (message) {
      console.log('收到消息：' + message)
      // 聊天框渲染消息
      this.renderChatContent('reception', message)
      // localStorage存储消息
      saveCurMessageToLocalStorage('reception', message)
    }
  },
  filters: {
    formatDate: function (value) {
      let date = new Date(value)
      // let y = date.getFullYear()
      let MM = date.getMonth() + 1
      MM = MM < 10 ? ('0' + MM) : MM
      let d = date.getDate()
      d = d < 10 ? ('0' + d) : d
      let h = date.getHours()
      h = h < 10 ? ('0' + h) : h
      let m = date.getMinutes()
      m = m < 10 ? ('0' + m) : m
      // let s = date.getSeconds()
      // s = s < 10 ? ('0' + s) : s
      return MM + '-' + d + ' ' + h + ':' + m
    }
  }
}
</script>

<style scoped>
</style>
