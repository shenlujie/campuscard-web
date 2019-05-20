<template>
  <div class="intro">
    <Row :gutter="16">
      <Col span="6">
        <leftPage/>
      </Col>
      <Col span="18">
        <breadcrumbview/>
        <Card>
          <h1 style="margin: 10px"><strong>使用指南</strong></h1>
          <Divider/>
          <div v-html="guideInfo"></div>
        </Card>
      </Col>
    </Row>
  </div>
</template>

<script>
import leftPage from '@/components/leftPage/index'
import breadcrumbview from '@/components/breadcrumb/index'
import {guideRead} from '@/api/campuscardInfo'
export default {
  data () {
    return {
      guideInfo: ''
    }
  },
  computed: {

  },
  mounted () {
    this.$Spin.show()
    // this.guideInfo = '<p>这样没问题</p>'
    guideRead().then(response => {
      let htmlStr = response.data.obj
      this.guideInfo = htmlStr
      this.$Spin.hide()
    }).catch(error => {
      this.guideInfo = '网络错误：' + error
      this.$Spin.hide()
    })
  },
  watch: {

  },
  methods: {

  },
  components: {
    leftPage,
    breadcrumbview
  }
}
</script>

<style scoped>
.intro {
  margin: 50px auto;
  width: 90%;
}
</style>
