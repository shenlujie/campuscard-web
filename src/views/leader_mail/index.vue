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
              <FormItem label="标题" prop="name">
                <Input v-model="formValidate.name" placeholder="请输入邮件标题"></Input>
              </FormItem>
              <FormItem label="内容" prop="desc">
                <Input
                  v-model="formValidate.desc"
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
              <Panel name="1">
                史蒂夫·乔布斯
                <p slot="content">史蒂夫·乔布斯（Steve Jobs），1955年2月24日生于美国加利福尼亚州旧金山，美国发明家、企业家、美国苹果公司联合创办人。</p>
              </Panel>
              <Panel name="2">
                斯蒂夫·盖瑞·沃兹尼亚克
                <p
                  slot="content"
                >斯蒂夫·盖瑞·沃兹尼亚克（Stephen Gary Wozniak），美国电脑工程师，曾与史蒂夫·乔布斯合伙创立苹果电脑（今之苹果公司）。斯蒂夫·盖瑞·沃兹尼亚克曾就读于美国科罗拉多大学，后转学入美国著名高等学府加州大学伯克利分校（UC Berkeley）并获得电机工程及计算机（EECS）本科学位（1987年）。</p>
              </Panel>
              <Panel name="3">
                乔纳森·伊夫
                <p
                  slot="content"
                >乔纳森·伊夫是一位工业设计师，现任Apple公司设计师兼资深副总裁，英国爵士。他曾参与设计了iPod，iMac，iPhone，iPad等众多苹果产品。除了乔布斯，他是对苹果那些著名的产品最有影响力的人。</p>
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
export default {
  data () {
    return {
      isLogin: false,
      formValidate: {
        name: '',
        desc: ''
      },
      ruleValidate: {
        name: [
          { required: true, message: '标题不能为空', trigger: 'blur' }
        ],
        desc: [
          { required: true, message: '内容不能为空', trigger: 'blur' },
          { type: 'string', min: 20, message: '邮件内容不得少于20个字', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    handleSubmit (name) {
      this.$refs[name].validate((valid) => {
        if (valid) {
          this.$Message.success('Success!')
        } else {
          this.$Message.error('Fail!')
        }
      })
    },
    handleReset (name) {
      this.$refs[name].resetFields()
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
  }
}
</script>

<style scoped>
.notfound {
  margin: 50px auto;
  width: 90%;
}
</style>
