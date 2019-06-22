<template>
  <div class="bg">
    <Card class="p-login" dis-hover shadow>
      <p slot="title">校园一卡通平台</p>
      <Form
        class="pb-form"
        ref="formValidate"
        :model="cForm.formValidate"
        :rules="cForm.ruleValidate"
        :label-width="0"
        label-position="left"
      >
        <Form-item prop="stNum">
          <Input
            v-model="cForm.formValidate.stNum"
            size="large"
            prefix="md-person"
            placeholder="请输入账号"
            @on-enter="handleLogin"
          />
        </Form-item>
        <Form-item prop="stPassword">
          <Input
            v-model="cForm.formValidate.stPassword"
            type="password"
            size="large"
            prefix="md-lock"
            placeholder="请输入密码"
            @on-enter="handleLogin"
          />
        </Form-item>
        <Form-item>
          <Button type="primary" size="large" long @click="handleLogin">登录</Button>
        </Form-item>
      </Form>
    </Card>
  </div>
</template>

<script>
export default {
  data () {
    return {
      cForm: {
        formValidate: {
          stNum: '',
          stPassword: ''
        },
        ruleValidate: {
          stNum: [
            {
              required: true,
              message: '账号不能为空'
            }
          ],
          stPassword: [
            {
              required: true,
              message: '密码不能为空'
            }
          ]
        }
      }
    }
  },
  methods: {
    handleLogin () {
      this.$refs.formValidate.validate(async valid => {
        if (valid) {
          this.$store.dispatch('Login', this.cForm.formValidate).then(
            value => {
              this.$store.dispatch('GetInfo').then(
                value => {
                  console.log('登陆成功后得到的GetIngo结果：' + value)
                  this.$Message.loading('正在登录中...', 2, this.$router.replace({ path: '/' }))
                },
                error => {
                  console.log('登陆成功后提交GetIngo失败的结果：' + error)
                  this.$Message.error(error)
                }
              )
            },
            error => {
              console.log(error)
              this.$Message.error(error)
            }
          )
        } else {
          this.$Message.error('学号密码不合法')
        }
      })
    }
  }
}
</script>

<style scoped>
.bg {
  margin-top: 100px;
  padding: 120px;
  height: 500px;
  background-image: url('../../assets/images/login_bg.jpg');
}
.p-login {
  margin: 0px 850px;
  width: 400px;
}
</style>
