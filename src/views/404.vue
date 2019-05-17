<template>
  <div class="notfound">
    <Row :gutter="16">
      <Col span="6">
        <leftPage/>
      </Col>
      <Col span="18">
        <breadcrumbview/>
        <Card>
          <div>
            <img src="@/assets/images/gif_404.gif" alt="请求不存在">
          </div>
        </Card>
      </Col>
    </Row>
  </div>
</template>

<script>
import leftPage from '@/components/leftPage/index'
import breadcrumbview from '@/components/breadcrumb/index'
export default {
  components: {
    leftPage,
    breadcrumbview
  }
}
</script>

<style scoped>
.notfound {
  margin: 50px auto;
  width: 90%;
}
img {
  height: 100%;
  width: 100%;
}
</style>
