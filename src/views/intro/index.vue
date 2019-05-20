<template>
  <div class="intro">
    <Row :gutter="16">
      <Col span="6">
        <leftPage/>
      </Col>
      <Col span="18">
        <breadcrumbview/>
        <Card>
          <h1 style="margin: 10px"><strong>简介</strong></h1>
          <Divider/>
          <div v-html="introInfo" style="margin: 10px"></div>
        </Card>
      </Col>
    </Row>
  </div>
</template>

<script>
import leftPage from '@/components/leftPage/index'
import breadcrumbview from '@/components/breadcrumb/index'
import {introRead} from '@/api/campuscardInfo'
export default {
  data () {
    return {
      introInfo: ''
    }
  },
  computed: {

  },
  mounted () {
    this.$Spin.show()
    introRead().then(response => {
      this.introInfo = response.data.obj
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
