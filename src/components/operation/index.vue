<template>
  <Card>
    <Divider orientation="left">填写相关信息</Divider>
    <Form ref="formValidate" :model="formValidate" :rules="ruleValidate" :label-width="80">
      <FormItem label="姓名" prop="name">
        <Input v-model="formValidate.name" placeholder="请输入姓名"></Input>
      </FormItem>
      <FormItem label="学生凭证" prop="voucher">
        <Select v-model="formValidate.voucher">
          <Option value="IDcard">身份证</Option>
          <Option value="StuID">学生证</Option>
        </Select>
      </FormItem>
      <FormItem label="证件正面照" prop="voucherPic">
        <Upload
        :on-format-error="formatError"
        :on-exceeded-size="exceededSize"
        :on-success="uploadSuccess"
        :format="['png','jpg','jpeg','gif','PNG','JPG','JPEG','GIF']"
        :max-size="maxSize"
        :data="userStNum"
        :headers="head"
        action="http://127.0.0.1:8090/campusCardOperation/upLoadPic">
          <Button icon="ios-cloud-upload-outline">选择图片</Button>
          <span>（最大上传1M,'png','jpg','jpeg','gif'）</span>
        </Upload>
      </FormItem>
      <FormItem label="业务类型" prop="operationType">
        <RadioGroup v-model="formValidate.operationType">
          <Radio label="0">挂失</Radio>
          <Radio label="1">解挂</Radio>
          <Radio label="2">补办</Radio>
        </RadioGroup>
      </FormItem>
      <FormItem>
        <Button type="primary" @click="handleSubmit('formValidate')">确认提交</Button>
        <Button @click="handleReset('formValidate')" style="margin-left: 8px">重置</Button>
      </FormItem>
    </Form>
  </Card>
</template>

<script>
import {submitOperation} from '@/api/userOperation'
export default {
  data () {
    return {
      formValidate: {
        stID: this.$store.getters.userInfo.id,
        name: '',
        voucher: '',
        voucherPic: '',
        operationType: ''
      },
      ruleValidate: {
        name: [
          { required: true, message: '姓名不能为空', trigger: 'blur' },
          { type: 'string', message: '存在非法字符', trigger: 'blur' }
        ],
        voucher: [
          { required: true, message: '请选择证件类型', trigger: 'blur' }
        ],
        // voucherPic: [
        //   { required: true, message: '请上传照片', trigger: 'blur' }
        // ],
        operationType: [
          { required: true, message: '请选择业务类型', trigger: 'blur' }
        ]
      },
      maxSize: 1024,
      userStNum: {
        curUser: this.$store.getters.userInfo.stNum
      },
      head: {
        Authorization: this.$store.getters.token
      }
    }
  },
  methods: {
    // 上传图片回调钩子
    formatError (file, fileList) {
      this.$Message.error('文件格式错误,请检查')
    },
    exceededSize (file, fileList) {
      this.$Message.error('文件过大,请检查')
    },
    uploadSuccess (response, file, fileList) {
      this.$Message.success('上传成功！')
    },
    // 提交和重置表单
    handleSubmit (name) {
      this.$refs[name].validate((valid) => {
        if (valid) {
          let stId = this.formValidate.stID
          let apply = this.formValidate.operationType
          submitOperation(stId, apply).then(response => {
            let res = response.data
            this.$Message.success(res.obj)
            this.$refs[name].resetFields()
          }).catch(error => {
            console.log(error.message)
            this.$Message.success(error.message)
          })
        } else {
          this.$Message.error('输入内容有误，请检查')
        }
      })
    },
    handleReset (name) {
      this.$refs[name].resetFields()
    }
  }
}
</script>

<style scoped>
</style>
