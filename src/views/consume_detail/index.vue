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
          <Table size="large" :columns="columns" :data="consumeTermInfo"></Table>
          <Card style= "margin: 10px" shadow>
            <Page align="center" :total="count" :page-size="limit" @on-change="changePage" show-elevator />
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
import {getConsumeTermDetail} from '@/api/consumeTermDetail'
export default {
  data () {
    return {
      isLogin: false,
      columns: [
        {
          title: '学号',
          key: 'stNum'
        },
        {
          title: '消费项目',
          key: 'consumeRecharge'
        },
        {
          title: '发生时间',
          key: 'happenTime',
          render: (h, params) => {
            // params.row能够获取当前行的数据
            return h('span', this.formatDate(params.row.happenTime))
          }
        },
        {
          title: '消费金额',
          key: 'sum',
          render: (h, params) => {
            // params.row能够获取当前行的数据
            return h('span', {}, params.row.sum + '元')
          }
        }
      ],
      consumeTermInfo: [],
      count: 1,
      limit: 6
    }
  },
  components: {
    leftPage,
    breadcrumbview,
    notLogin
  },
  methods: {
    changePage (curPage) {
      let stNum = this.$store.getters.userInfo.stNum
      getConsumeTermDetail(curPage, 6, stNum).then(response => {
        let res = response.data
        this.consumeTermInfo = res.obj
        this.count = res.count
      }).catch(error => {
        console.log(error.message)
      })
    },
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
  },
  mounted () {
    console.log(this.$store.getters.token)
    if (this.$store.getters.token) {
      this.$Spin.show()
      this.isLogin = true
      let stNum = this.$store.getters.userInfo.stNum
      getConsumeTermDetail(1, 6, stNum).then(response => {
        let res = response.data
        this.consumeTermInfo = res.obj
        this.count = res.count
        this.$Spin.hide()
      }).catch(error => {
        console.log(error.message)
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
