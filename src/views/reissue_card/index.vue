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
          <h1 style="margin: 10px"><strong>申请业务</strong></h1>
          <Divider/>
          <operation></operation>
          <h1 style="margin: 10px"><strong>历史纪录</strong></h1>
          <Divider/>
          <Table :columns="columns" :data="userOperatioinInfo"></Table>
        </Card>
      </Col>
    </Row>
  </div>
</template>

<script>
import leftPage from '@/components/leftPage/index'
import breadcrumbview from '@/components/breadcrumb/index'
import notLogin from '@/components/notLogin/index'
import operation from '@/components/operation/index'
import {getOperation} from '@/api/userOperation'
export default {
  data () {
    return {
      isLogin: false,
      columns: [
        {
          title: '姓名',
          key: 'name',
          render: (h, params) => {
            return h('span', {}, this.$store.getters.userInfo.stName)
          }
        },
        {title: '业务类型', key: 'apply'},
        {title: '当前状态', key: 'status'}
      ],
      userOperatioinInfo: []
    }
  },
  components: {
    leftPage,
    breadcrumbview,
    notLogin,
    operation
  },
  mounted () {
    console.log(this.$store.getters.token)
    if (this.$store.getters.token) {
      this.isLogin = true
      let stId = this.$store.getters.userInfo.id
      getOperation(stId).then(response => {
        let res = response.data
        this.userOperatioinInfo = res.obj
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
