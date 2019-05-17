<template>
  <Card>
    <div style="height: 700px;">
      <div class="top">
        <Card :bordered="false">
          <p slot="title">
            <Icon type="md-attach" />快捷入口
          </p>
          <div>
            <Row>
              <Col span="8">
                <Card class="linkDiv" style="background-color: #8a9046">
                  <a href="http://www.nuc.edu.cn/" target="view_window">
                    <div style="text-align:center">
                      <img src="@/assets/images/school.png">
                      <span>中北大学</span>
                    </div>
                  </a>
                </Card>
              </Col>
              <Col span="8">
                <Card class="linkDiv" style="background-color: #3e759b">
                  <a href="http://cst.nuc.edu.cn/" target="view_window">
                    <div style="text-align:center">
                      <img src="@/assets/images/university.png">
                      <span>大数据学院</span>
                    </div>
                  </a>
                </Card>
              </Col>
              <Col span="8">
                <Card class="linkDiv" style="background-color: #7d7b7c">
                  <a href="http://i.nuc.edu.cn/default_new.html" target="view_window">
                    <div style="text-align:center">
                      <img src="@/assets/images/digital.png">
                      <span>数字化校园</span>
                    </div>
                  </a>
                </Card>
              </Col>
            </Row>
          </div>
          <div>
            <Row>
              <Col span="8">
                <Card class="linkDiv" style="background-color: #a88b61">
                  <a href="https://ca.nuc.edu.cn/zfca/login" target="view_window">
                    <div style="text-align:center">
                      <img src="@/assets/images/personal.png">
                      <span>个人门户</span>
                    </div>
                  </a>
                </Card>
              </Col>
              <Col span="8">
                <Card class="linkDiv" style="background-color: #c26623">
                  <a href="http://lib.nuc.edu.cn/new/index.action" target="view_window">
                    <div style="text-align:center">
                      <img src="@/assets/images/library.png">
                      <span>图书馆</span>
                    </div>
                  </a>
                </Card>
              </Col>
              <Col span="8">
                <Card class="linkDiv" style="background-color: #903932">
                  <a href="http://rlzyglc.nuc.edu.cn/rszp/zy.htm" target="view_window">
                    <div style="text-align:center">
                      <img src="@/assets/images/work.png">
                      <span>人才招聘</span>
                    </div>
                  </a>
                </Card>
              </Col>
            </Row>
          </div>
          <div>
            <Row>
              <Col span="8">
                <Card class="linkDiv" style="background-color: #886725">
                  <a href="http://202.207.177.230:8080/login.aspx?ReturnUrl=%2f" target="view_window">
                    <div style="text-align:center">
                      <img src="@/assets/images/graduation.png">
                      <span>毕设选题</span>
                    </div>
                  </a>
                </Card>
              </Col>
              <Col span="8">
                <Card class="linkDiv" style="background-color: #934363">
                  <a href="http://202.207.177.24/aexp/" target="view_window">
                    <div style="text-align:center">
                      <img src="@/assets/images/test.png">
                      <span>实验预约</span>
                    </div>
                  </a>
                </Card>
              </Col>
              <Col span="8">
                <Card class="linkDiv" style="background-color: #ad5e36">
                  <a href="http://mail.st.nuc.edu.cn/" target="view_window">
                    <div style="text-align:center">
                      <img src="@/assets/images/mail.png">
                      <span>电子邮件</span>
                    </div>
                  </a>
                </Card>
              </Col>
            </Row>
          </div>
        </Card>
      </div>
      <div class="bottom">
        <Card :bordered="false">
          <p slot="title">
            <Icon type="md-call"/>联系我们
          </p>
          <div>
            <Row>
              <Col span="14">
                <p>
                  <Icon type="ios-call"/>
                  <strong>服务电话</strong> 34206060
                </p>
                <br>
                <p>
                  <Icon type="ios-calendar"/>
                  <strong>服务时间：</strong>
                </p>
                <p>周一至周五 8:00-19:00</p>
                <br>
                <p>
                  <Icon type="ios-mail"/>
                  <strong>邮箱地址：</strong>
                </p>
                <p>service@sjtu.edu.cn</p>
              </Col>
              <Col span="10">
                <img src="@/assets/images/erweima.jpg" alt>
                <p style="text-align:center">关注公众号</p>
              </Col>
            </Row>
          </div>
        </Card>
      </div>
    </div>
  </Card>
</template>

<script>
export default {
  props: {

  },
  data () {
    return {

    }
  },
  computed: {

  },
  created () {

  },
  mounted () {

  },
  watch: {

  },
  methods: {

  },
  components: {

  }
}
</script>

<style scoped>
.top {
  height: 65%;
}
.bottom {
  height: 35%;
}
img {
  height: 100%;
  width: 100%;
}
.linkDiv span {
  color: white;
  font-size: 10px;
}
</style>
