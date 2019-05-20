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
        <Card v-if="isLogin" style="height: 600px">
          <Modal
            title="修改密码"
            width='600'
            v-model="isChangePsw"
            :mask-closable="false">
            <Form :label-width="70" ref="formValidate" :model="formValidate" :rules="ruleValidate">
              <FormItem label="当前密码" prop="curPsw">
                <Input v-model="formValidate.curPsw" placeholder="请输入当前密码" type="password"></Input>
              </FormItem>
              <FormItem label="新密码" prop="newPsw">
                <Input v-model="formValidate.newPsw" placeholder="请输入新密码" type="password"></Input>
              </FormItem>
              <FormItem label="新密码二次确认" prop="reNewPsw">
                <Input v-model="formValidate.reNewPsw" placeholder="请再次输入新密码" type="password"></Input>
              </FormItem>
              <FormItem>
                <Row>
                  <Col span="20">
                    <Button type="primary" size="large" long @click="handleSubmit('formValidate')">确认修改</Button>
                  </Col>
                  <Col span="4"></Col>
                </Row>
              </FormItem>
            </Form>
            <div slot="footer">
            </div>
          </Modal>
          <Card
            style="height: 280px; background-image: url('https://dev-file.iviewui.com/userinfodEYwpg1OaBDCYrQMyfATqnAYew8mHuAk/large');"
          >
            <div class="userPicDiv">
              <img src="@/assets/images/user.png" alt>
              <span class="userNameSpan">{{stName}}</span>
              <span style="font-size: 15px">(邮箱：{{stEmail}})</span>
              <span class="changePsw" @click="isChangePsw = true">
                <Icon type="md-hammer"/>修改密码
              </span>
            </div>
            <div style="margin-left: 150px">
              <Form :label-width="70">
                <FormItem label="学号">
                  <Input v-model="stNum" disabled></Input>
                </FormItem>
                <FormItem label="性别">
                  <RadioGroup v-model="stSex">
                    <Radio label="男" disabled>男</Radio>
                    <Radio label="女" disabled>女</Radio>
                  </RadioGroup>
                </FormItem>
                <FormItem label="学院">
                  <Input v-model="stDepartment" disabled></Input>
                </FormItem>
                <FormItem label="专业">
                  <Input v-model="stMajor" disabled></Input>
                </FormItem>
              </Form>
            </div>
          </Card>
        </Card>
      </Col>
    </Row>
  </div>
</template>

<script>
import leftPage from '@/components/leftPage/index'
import breadcrumbview from '@/components/breadcrumb/index'
import notLogin from '@/components/notLogin/index'
import {changePsw} from '@/api/frontUserStudent'
export default {
  data () {
    return {
      isLogin: false,
      // 学生信息
      stNum: this.$store.getters.userInfo.stNum,
      stName: this.$store.getters.userInfo.stName,
      stSex: this.$store.getters.userInfo.stSex,
      stDepartment: this.$store.getters.userInfo.stDepartment,
      stMajor: this.$store.getters.userInfo.stMajor,
      stEmail: this.$store.getters.userInfo.stEmail,
      // 修改密码
      isChangePsw: false,
      formValidate: {
        curPsw: '',
        newPsw: '',
        reNewPsw: ''
      },
      ruleValidate: {
        curPsw: [
          { required: true, message: '当前密码不能为空', trigger: 'blur' }
        ],
        newPsw: [
          { required: true, message: '新密码不能为空', trigger: 'blur' }
        ],
        reNewPsw: [
          { required: true, message: '请再次输入新密码', trigger: 'blur' }
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
    console.log(this.$store.getters.token)
    if (this.$store.getters.token) {
      this.isLogin = true
    }
  },
  methods: {
    handleSubmit (name) {
      this.$Spin.show()
      this.$refs[name].validate((valid) => {
        if (valid) {
          let stNum = this.stNum
          let curPsw = this.formValidate.curPsw
          let newPsw = this.formValidate.newPsw
          let reNewPsw = this.formValidate.reNewPsw
          changePsw(stNum, curPsw, newPsw, reNewPsw).then(response => {
            let res = response.data
            this.$Spin.hide()
            if (!res.success) {
              this.$Message.error(res.msg)
            } else {
              this.$Message.success(res.msg)
              this.$store.dispatch('FedLogOut').then(
                value => {
                  location.reload()
                }
              )
            }
          }).catch(error => {
            this.$Spin.hide()
            console.log(error.message)
          })
        } else {
          this.$Spin.hide()
          this.$Message.error('格式不正确，提交失败')
        }
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
.userPicDiv {
  height: 120px;
  margin-top: 170px;
  margin-left: 30px;
  color: white;
  font-size: 27px;
}
img {
  width: 120px;
  height: 120px;
  border: 3px solid #fff;
  border-radius: 5px;
}
.userNameSpan {
  margin-left: 20px;
}
.changePsw {
  margin-left: 330px;
  font-size: 20px;
}
.changePsw:hover {
  color: black;
  cursor: pointer;
}
</style>
