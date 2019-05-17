<template>
  <div style="margin:50px auto; width: 90%">
    <Row :gutter="16">
      <Col span="6">
        <leftPage/>
      </Col>
      <Col span="18">
        <breadcrumbview/>
        <Card>
          <h1 style="margin: 10px"><strong>公告详情</strong></h1>
          <Divider/>
          <h4 align="center">{{ announcementDetailInfo.title }}</h4>
          <div class="announcementDetailDiv" v-html="announcementDetailInfo.details"></div>
        </Card>
      </Col>
    </Row>
  </div>
</template>

<script>
import leftPage from '@/components/leftPage/index'
import breadcrumbview from '@/components/breadcrumb/index'
import {announcementDetail} from '@/api/campuscardInfo'
export default {
  data () {
    return {
      announcementDetailInfo: ''
    }
  },
  computed: {

  },
  mounted () {
    let id = this.$route.params.id
    // console.log(id)
    announcementDetail(id).then(response => {
      let htmlStr = response.data.obj
      this.announcementDetailInfo = htmlStr
    }).catch(error => {
      this.announcementDetailInfo = '网络错误：' + error
    })
  },
  components: {
    leftPage,
    breadcrumbview
  }
}
</script>

<style scoped>
.announcementDetailDiv {
  margin: 50px auto;
  width: 90%;
  font-size: 17px
}
</style>
