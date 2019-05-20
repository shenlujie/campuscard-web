<template>
  <div class="notfound">
    <Row :gutter="16">
      <Col span="6">
        <leftPage/>
      </Col>
      <Col span="18">
        <breadcrumbview/>
        <Card v-if="!isLogin">
          <notLogin/>
        </Card>
        <Card v-if="isLogin">
          <div>
            <div class="lostTitle">
              <span>
                <strong>寻物启事</strong>
              </span>
              <span class="publishButton" @click="isPublish = true">
                <Icon type="md-add-circle" />
              </span>
              <Modal
                title="发布招领信息"
                width='600'
                v-model="isPublish"
                :mask-closable="false">
                <Form ref="formValidate" :model="formValidate" :rules="ruleValidate" :label-width="80">
                  <Divider orientation="left">校园卡信息</Divider>
                  <FormItem label="学号" prop="lostNum">
                    <Input v-model="formValidate.lostNum" placeholder="请输入失者学号"></Input>
                  </FormItem>
                  <FormItem label="姓名" prop="lostName">
                    <Input v-model="formValidate.lostName" placeholder="请输入失者姓名"></Input>
                  </FormItem>
                  <FormItem label="卡片照片" prop="cardPic">
                    <!-- 上传图片模块 -->
                    <Upload
                    :on-format-error="formatError"
                    :on-exceeded-size="exceededSize"
                    :on-success="uploadSuccess"
                    :headers="head"
                    :data="userStNum"
                    :format="['png','jpg','jpeg','gif','PNG','JPG','JPEG','GIF']"
                    :max-size="maxSize"
                    action="http://127.0.0.1:8090/campusCardLost/upLoadPic">
                      <Button icon="ios-cloud-upload-outline">选择图片</Button>
                      <span>（最大上传1M,'png','jpg','jpeg','gif'）</span>
                    </Upload>
                  </FormItem>
                  <Divider orientation="left">上传人信息</Divider>
                  <FormItem label="联系方式" prop="upPhone">
                    <Input v-model="formValidate.upPhone" placeholder="请输入上传人联系方式"></Input>
                  </FormItem>
                  <FormItem label="捡到日期">
                    <Row>
                      <Col span="11">
                        <FormItem prop="date">
                          <DatePicker type="date" placeholder="选择日期" v-model="formValidate.date"></DatePicker>
                        </FormItem>
                      </Col>
                      <Col span="2" style="text-align: center">-</Col>
                      <Col span="11">
                        <FormItem prop="time">
                          <TimePicker type="time" placeholder="选择时间" v-model="formValidate.time"></TimePicker>
                        </FormItem>
                      </Col>
                    </Row>
                  </FormItem>
                  <FormItem>
                    <Row>
                      <Col span="20">
                        <Button type="primary" size="large" long @click="handleSubmit('formValidate')">确认发布</Button>
                      </Col>
                      <Col span="4"></Col>
                    </Row>
                  </FormItem>
                </Form>
                <div slot="footer">
                </div>
              </Modal>
            </div>
            <Divider/>
            <Row v-for="(item, index) in lostInfo" :key="index">
              <Col span="8">
                <Card style="height: 150px">
                  <img :src="item.cardPic" alt="">
                </Card>
              </Col>
              <Col span="16">
                <Card style="height: 150px">
                  <p slot="title">失者：{{item.lostStName}}</p>
                  <p slot="extra"><strong>学号：{{item.lostStNum}}</strong></p>
                  <div>
                    <div>上传人：<span>{{item.upStNum}}</span></div>
                    <div>联系方式：<span>{{item.upStTel}}</span></div>
                    <div><span style="float: right">上传时间：{{item.foundTime | formatDate}}</span></div>
                  </div>
                </Card>
              </Col>
            </Row>
            <Card style= "margin: 10px" shadow>
              <Page align="center" :total="count" :page-size="limit" @on-change="changePage" show-elevator />
            </Card>
          </div>
        </Card>
      </Col>
    </Row>
  </div>
</template>

<script>
import leftPage from '@/components/leftPage/index'
import breadcrumbview from '@/components/breadcrumb/index'
import notLogin from '@/components/notLogin/index'
import {publishLost, getLost} from '@/api/campuscardLost'
export default {
  data () {
    return {
      isLogin: false,
      // 获取相关data
      lostInfo: '',
      count: 1,
      limit: 5,
      // 发布相关data
      isPublish: false,
      userStNum: {
        curUser: this.$store.getters.userInfo.stNum
      },
      head: {
        Authorization: this.$store.getters.token
      },
      maxSize: 1024,
      // 表单数据
      formValidate: {
        lostNum: '',
        lostName: '',
        cardPic: '',
        upNum: this.$store.getters.userInfo.stNum,
        upPhone: '',
        date: '',
        time: ''
      },
      ruleValidate: {
        lostNum: [
          { required: true, message: '失者学号不能为空', trigger: 'blur' }
        ],
        lostName: [
          { required: true, message: '失者姓名不能为空', trigger: 'blur' },
          { type: 'string', message: '存在非法字符', trigger: 'blur' }
        ],
        cardPic: [
          { required: true, message: '请上传照片', trigger: 'blur' }
        ],
        upPhone: [
          { required: true, message: '上传人联系方式不能为空', trigger: 'blur' }
        ],
        date: [
          { required: true, type: 'date', message: '日期不能为空', trigger: 'change' }
        ],
        time: [
          { required: true, type: 'string', message: '时间不能为空', trigger: 'change' }
        ]
      }
    }
  },
  components: {
    leftPage,
    breadcrumbview,
    notLogin
  },
  mounted () {
    this.$Spin.show()
    console.log(this.$store.getters.token)
    if (this.$store.getters.token) {
      this.isLogin = true
      // 获取失物招领列表
      getLost(1, 5, 1).then(response => {
        let res = response.data
        this.lostInfo = res.obj
        this.count = res.count
        this.$Spin.hide()
      }).catch(error => {
        console.log(error.message)
        this.$Spin.hide()
      })
    }
  },
  methods: {
    // 获取相关func
    changePage (curPage) {
      this.$Spin.show()
      getLost(curPage, 5, 1).then(response => {
        let res = response.data
        this.lostInfo = res.obj
        this.count = res.count
        this.$Spin.hide()
      })
    },
    // 发布相关func
    formatError (file, fileList) {
      this.$Message.error('文件格式错误,请检查')
    },
    exceededSize (file, fileList) {
      this.$Message.error('文件过大,请检查')
    },
    uploadSuccess (response, file, fileList) {
      let filename = file.name
      let index1 = filename.lastIndexOf('.')
      var index2 = filename.length
      let subFileName = filename.substring(index1, index2)
      this.formValidate.cardPic = 'http://localhost:8090/cardPic/campuscard-' + this.$store.getters.userInfo.stNum + subFileName
      this.$Message.success('上传成功！')
    },
    handleSubmit (name) {
      this.$Spin.show()
      this.$refs[name].validate((valid) => {
        if (valid) {
          if (this.formValidate.cardPic !== '') {
            let upStNum = this.formValidate.upNum
            let lostStNum = this.formValidate.lostNum
            let lostStName = this.formValidate.lostName
            let cardPic = this.formValidate.cardPic
            // 格式化时间日期
            let date = new Date(this.formValidate.date)
            let dateStr = date.getFullYear() + '-' + date.getMonth() + '-' + date.getDate()
            let foundTime = new Date(dateStr + ' ' + this.formValidate.time)
            let upStTel = this.formValidate.upPhone
            let status = 0
            console.log(upStNum)
            console.log(lostStNum)
            console.log(lostStName)
            console.log(cardPic)
            console.log(foundTime)
            console.log(upStTel)
            publishLost(upStNum, lostStNum, lostStName, cardPic, foundTime, upStTel, status).then(response => {
              let res = response.data
              this.$Spin.hide()
              console.log(res)
              this.$Message.success(res.obj)
              this.$refs[name].resetFields()
            }).catch(error => {
              this.$Spin.hide()
              console.log(error.message)
              this.$Message.error(error.message)
            })
          }
          // this.$Message.success('Success!')
        } else {
          this.$Spin.hide()
          this.$Message.error('发布失败!')
        }
      })
    }
  },
  filters: {
    formatDate: function (value) {
      let date = new Date(value)
      let y = date.getFullYear()
      let MM = date.getMonth() + 1
      MM = MM < 10 ? ('0' + MM) : MM
      let d = date.getDate()
      d = d < 10 ? ('0' + d) : d
      // let h = date.getHours();
      // h = h < 10 ? ('0' + h) : h;
      // let m = date.getMinutes();
      // m = m < 10 ? ('0' + m) : m;
      // let s = date.getSeconds();
      // s = s < 10 ? ('0' + s) : s;
      return y + '-' + MM + '-' + d
    }
  }
}
</script>

<style scoped>
.notfound {
  margin: 50px auto;
  width: 90%;
}
.contentDiv {
  margin: 5px;
}
img {
  width: 100%;
  height: 120px;
}
.lostTitle {
  font: 2em bold;
  margin: 10px;
}
.publishButton {
  float: right;
}
.publishButton :hover{
  font-size: 40px;
  cursor: pointer;
}
</style>
