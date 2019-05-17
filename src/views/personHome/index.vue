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
        <Card v-if="isLogin"></Card>
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
      isLogin: false
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
