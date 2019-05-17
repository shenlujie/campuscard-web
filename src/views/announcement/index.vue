<template>
  <div class="intro">
    <Row :gutter="16">
      <Col span="6">
        <leftPage/>
      </Col>
      <Col span="18">
        <breadcrumbview/>
        <Card>
          <h1 style="margin: 10px"><strong>信息公告</strong></h1>
          <Divider/>
          <Card style= "margin: 10px" v-for="(item, index) in announcementInfo" :key="index">
            <router-link :to="{path:'/announceDetail/'+item.id}" class="link">{{ item.title }}</router-link>
            <span style="float: right">{{ item.releaseTime | formatDate }}</span>
          </Card>
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
import {announcementRead} from '@/api/campuscardInfo'
export default {
  data () {
    return {
      announcementInfo: '',
      count: 1,
      limit: 6
    }
  },
  components: {
    leftPage,
    breadcrumbview
  },
  methods: {
    changePage (curPage) {
      announcementRead(curPage, 6).then(response => {
        let res = response.data
        this.announcementInfo = res.obj
        this.count = res.count
        this.limit = 6
      })
    }
  },
  mounted () {
    announcementRead(1, 6).then(response => {
      let res = response.data
      this.announcementInfo = res.obj
      this.count = res.count
      // this.page = 1
      this.limit = 6
    })
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
.intro {
  margin: 50px auto;
  width: 90%
}
.link {
  color: black
}
.link:hover {
  color: #0066cc
}
</style>
