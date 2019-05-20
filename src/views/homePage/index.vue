<template>
  <div class="homePage">
    <div class="carouselDiv">
      <Carousel autoplay>
        <Carousel-item>
          <div class="demo-carousel">
            <a href="http://www.nuc.edu.cn/">
              <img
                src="@/assets/images/campus_door.jpg"
                alt
              >
            </a>
          </div>
        </Carousel-item>
        <Carousel-item>
          <div class="demo-carousel">
            <a href="http://www.nuc.edu.cn/info/1013/9407.htm">
              <img
                src="@/assets/images/campus_it.jpg"
                alt
              >
            </a>
          </div>
        </Carousel-item>
        <Carousel-item>
          <div class="demo-carousel">
            <a href="http://cst.nuc.edu.cn/info/1038/1635.htm">
              <img
                src="@/assets/images/campus_test.jpg"
                alt
              >
            </a>
          </div>
        </Carousel-item>
        <Carousel-item>
          <div class="demo-carousel">
            <a href="http://cst.nuc.edu.cn/">
              <img
                src="@/assets/images/campus_together.jpg"
                alt
              >
            </a>
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
