<template>
  <div class="intro">
    <Row :gutter="16">
      <Col span="6">
        <leftPage/>
      </Col>
      <Col span="18">
        <breadcrumbview/>
        <Card>
          <h1 style="margin: 10px"><strong>管理条例</strong></h1>
          <Divider/>
          <Card style="margin: 10px" v-for="(item, index) in ruleInfo" :key="index">
            <p slot="title">
              {{item.title}}
            </p>
            <div v-html="item.content"></div>
          </Card>
        </Card>
      </Col>
    </Row>
  </div>
</template>

<script>
import leftPage from '@/components/leftPage/index'
import breadcrumbview from '@/components/breadcrumb/index'
import {ruleRead} from '@/api/campuscardInfo'
export default {
  data () {
    return {
      ruleInfo: ''
    }
  },
  mounted () {
    this.$Spin.show()
    ruleRead().then(response => {
      this.ruleInfo = response.data.obj
      this.$Spin.hide()
    })
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
