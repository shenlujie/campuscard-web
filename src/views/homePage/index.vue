<template>
  <div class="homePage">
    <div class="carouselDiv">
      <Carousel autoplay>
        <Carousel-item>
          <div class="demo-carousel">
            <img
              src="https://net.jmu.edu.cn/__local/1/44/74/F17636B6E5C19E39DA1706E942D_6758A22A_14F19.jpg"
              alt
            >
          </div>
        </Carousel-item>
        <Carousel-item>
          <div class="demo-carousel">
            <img
              src="https://net.jmu.edu.cn/__local/B/E8/7B/CD0E4DB8B4B7116FFB8351B974A_78F2DA56_188D4.jpg"
              alt
            >
          </div>
        </Carousel-item>
        <Carousel-item>
          <div class="demo-carousel">
            <img
              src="https://net.jmu.edu.cn/__local/C/DD/46/C0C7B58BC15486B1DF1A5D8FF59_0B8137E3_758ED.jpg"
              alt
            >
          </div>
        </Carousel-item>
        <Carousel-item>
          <div class="demo-carousel">
            <img
              src="https://net.jmu.edu.cn/__local/1/13/24/C23DC35C60520883AA11E90B2F2_01881702_1B8E5.jpg"
              alt
            >
          </div>
        </Carousel-item>
      </Carousel>
    </div>
    <div class="content">
      <Row :gutter="16">
        <Col span="6">
          <leftPage/>
        </Col>
        <Col span="18">
          <rightPage/>
        </Col>
      </Row>
    </div>
  </div>
</template>

<script>
import leftPage from '@/components/leftPage/index'
import rightPage from '@/views/homePage/rightPage/index'

export default {
  components: {
    leftPage,
    rightPage
  }
}
</script>

<style scoped>
.homePage {
  margin: 50px auto;
  width: 90%;
}
.content {
  margin: 20px auto;
}
.demo-carousel {
  height: 290px;
  background-color: blue;
}
img {
  width: 100%;
  height: 100%;
}
</style>
