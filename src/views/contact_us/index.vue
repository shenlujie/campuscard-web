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
            <img src="@/assets/images/contact_us_title.png" alt="">
            <img src="@/assets/images/contact_us_content.png" alt="">
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
  width: 100%;
  height: 100%;
}
</style>
