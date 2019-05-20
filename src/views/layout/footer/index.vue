<template>
  <div class="footer">
    <div class="content">
      <Row>
        <Col span="6">
          <div align= "center" style="margin-top: 20px">
            <div class="title">
              <img src="@/assets/images/github.png" alt="">
              GitHub
            </div>
            <ul>
              <li>
                <a href="https://github.com/shenlujie/campuscard-web">校园一卡通客户端</a>
              </li>
              <li>
                <a href="https://github.com/shenlujie/campuscard">一卡通网站后端接口</a>
              </li>
              <li>
                <a href="https://github.com/shenlujie/GoOffer">剑指offer代码仓</a>
              </li>
              <li>
                <a href="https://github.com/shenlujie/algorithm-interview">algorithm-interview</a>
              </li>
            </ul>
          </div>
        </Col>
        <Col span="3">&nbsp;</Col>
        <Col span="6">
          <div align= "center" style="margin-top: 20px">
            <div class="title">
              <img src="@/assets/images/community.png" alt="">
              社区
            </div>
            <ul>
              <li>
                <a href="https://www.csdn.net/">CSDN-专业IT技术社区</a>
              </li>
              <li>
                <a href="https://segmentfault.com/">SegmentFault 思否</a>
              </li>
              <li>
                <a href="https://juejin.im/">掘金- 一个帮助开发者成长的社区</a>
              </li>
              <li>
                <a href="https://www.jianshu.com/">简书- 创作你的创作</a>
              </li>
            </ul>
          </div>
        </Col>
        <Col span="3">&nbsp;</Col>
        <Col span="6">
          <div align= "center" style="margin-top: 20px">
            <div class="title">
              <img src="@/assets/images/help.png" alt="">
              帮助
            </div>
            <ul>
              <li>
                <a href="https://cn.vuejs.org/index.html">Vue.js-渐进式JavaScript框架</a>
              </li>
              <li>
                <a href="https://webpack.js.org/">webpack-bundle your project</a>
              </li>
              <li>
                <a href="https://www.iviewui.com/">iView - 一套高质量的UI组件库</a>
              </li>
              <li>
                <a href="https://www.bootcss.com/">Bootstrap 是最受欢迎的前端框架</a>
              </li>
            </ul>
          </div>
        </Col>
      </Row>
    </div>
  </div>
</template>

<script>
export default {
}
</script>

<style scoped>
.footer {
  height: 200px;
  color: white;
  background-color: #343a40;
}
.content {
  margin: 0 auto;
  width: 80%;
  height: 100%;
}
img {
  height: 25px;
  width: 25px
}
ul {
  margin: 10px;
  list-style-type: none;
}
ul li {
  margin: 5px
}
a {
  color: white;
  font-size: 14px
}
a:hover {
  color: #0066cc
}
.title {
  font-size: 17px
}
</style>
