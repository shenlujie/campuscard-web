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
            <h1 style="margin: 10px">
              <strong>提出意见</strong>
            </h1>
            <Divider/>
            <Form ref="formValidate" :model="formValidate" :rules="ruleValidate" :label-width="80">
              <FormItem label="标题" prop="title">
                <Input v-model="formValidate.title" placeholder="请输入邮件标题"></Input>
              </FormItem>
              <FormItem label="内容" prop="content">
                <Input
                  v-model="formValidate.content"
                  type="textarea"
                  :autosize="{minRows: 6,maxRows: 6}"
                  placeholder="请输入邮件内容"
                ></Input>
              </FormItem>
              <FormItem>
                <Button type="primary" @click="handleSubmit('formValidate')">提交</Button>
                <Button @click="handleReset('formValidate')" style="margin-left: 8px">重置</Button>
              </FormItem>
            </Form>
          </div>
          <div>
            <h1 style="margin: 10px">
              <strong>已发送的邮件</strong>
            </h1>
            <Divider/>
            <Collapse>
              <Panel v-for="(item, index) in myMail" :key="index">
                {{item.title}}
                <p slot="content">{{item.content}}</p>
              </Panel>
            </Collapse>
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
import {sendMail, getMail} from '@/api/leaderMailBox'

export default {
  data () {
    return {
      isLogin: false,
      formValidate: {
        title: '',
        content: ''
      },
      ruleValidate: {
        title: [
          { required: true, message: '标题不能为空', trigger: 'blur' }
        ],
        content: [
          { required: true, message: '内容不能为空', trigger: 'blur' },
          { type: 'string', min: 20, message: '邮件内容不得少于20个字', trigger: 'blur' }
        ]
      },
      myMail: ''
    }
  },
  methods: {
    handleSubmit (name) {
      this.$Spin.show()
      this.$refs[name].validate((valid) => {
        if (valid) {
          let id = this.$store.getters.userInfo.id
          let mailTitle = this.formValidate.title
          let mailContent = this.formValidate.content
          sendMail(id, mailTitle, mailContent).then(response => {
            let res = response.data
            this.$Spin.hide()
            this.$Message.success(res.obj)
            this.$refs[name].resetFields()
            this.getMyMail()
          }).catch(error => {
            this.$Spin.hide()
            console.log('发送邮件异常：' + error.message)
            this.$Message.error(error.message)
          })
        } else {
          this.$Spin.hide()
          this.$Message.error('输入内容有误，请检查')
        }
      })
    },
    handleReset (name) {
      this.$refs[name].resetFields()
    },
    getMyMail () {
      this.$Spin.show()
      let id = this.$store.getters.userInfo.id
      getMail(id).then(response => {
        let res = response.data
        this.myMail = res.obj
        this.$Spin.hide()
      }).catch(error => {
        this.$Spin.hide()
        console.log('获取已发送邮件失败：' + error.message)
      })
    }
  },
  components: {
    leftPage,
    breadcrumbview,
    notLogin
  },
  mounted () {
    this.$Spin.show()
    // console.log(this.$store.getters.token)
    if (this.$store.getters.token) {
      this.isLogin = true
      let id = this.$store.getters.userInfo.id
      getMail(id).then(response => {
        let res = response.data
        this.myMail = res.obj
        this.$Spin.hide()
      }).catch(error => {
        console.log('获取已发送邮件失败：' + error.message)
        this.$Spin.hide()
      })
    }
  }
}
</script>

<style scoped>
.notfound {
  margin: 50px auto;
  width: 90%;
}
</style>
