<template>
  <Card>
    <div>
      <div class="level1" style="height: 50%">
        <Row :gutter="16">
          <Col span="12">
            <Card style="width:100%; height: 270px">
              <p slot="title">
                <Icon type="ios-calendar-outline" />信息公告
              </p>
              <router-link to="/announcement" slot="extra">
                <Icon type="ios-loop-strong"></Icon><strong>···更多</strong>
              </router-link>
              <div v-for="(item, index) in announcementList.slice(0,3)" :key="index">
                <router-link :to="{path:'/announceDetail/'+item.id}" class="link">{{ item.title }}...</router-link>
                <Divider/>
              </div>
            </Card>
          </Col>
          <Col span="12">
            <Card style="width:100%; height: 270px">
              <p slot="title">
                <Icon type="ios-clipboard-outline"/>一卡通简介
              </p>
              <router-link to="/intro" slot="extra">
                <Icon type="ios-loop-strong"></Icon><strong>···更多</strong>
              </router-link>
              <router-link :to="{path:'/intro'}" class="link">一、校园卡具有以下功能...</router-link>
              <Divider/>
              <router-link :to="{path:'/intro'}" class="link">二、校园卡自助服务终端功能...</router-link>
              <Divider/>
              <router-link :to="{path:'/intro'}" class="link">三、校园卡网上业务办理...</router-link>
              <Divider/>
            </Card>
          </Col>
        </Row>
      </div>
      <div class="level2" style="margin-top: 10px">
        <Row :gutter="16">
          <Col span="12">
            <Card style="width:100%; height: 270px">
              <p slot="title">
                <Icon type="ios-construct-outline" />管理条例
              </p>
              <router-link to="/rule" slot="extra">
                <Icon type="ios-loop-strong"></Icon><strong>···更多</strong>
              </router-link>
              <div v-for="(item, index) in ruleList.slice(0,3)" :key="index">
                <router-link :to="{path:'/rule'}" class="link">{{ item.title }}...</router-link>
                <Divider/>
              </div>
            </Card>
          </Col>
          <Col span="12">
            <Card style="width:100%; height: 270px">
              <p slot="title">
                <Icon type="ios-compass-outline" />使用指南
              </p>
              <router-link to="/guide" slot="extra">
                <Icon type="ios-loop-strong"></Icon><strong>···更多</strong>
              </router-link>
              <router-link :to="{path:'/guide'}" class="link">1.校园卡都可以在校内哪些地方使用？...</router-link>
              <Divider/>
              <router-link :to="{path:'/guide'}" class="link">2.校园卡领取以及使用流程...</router-link>
              <Divider/>
              <router-link :to="{path:'/guide'}" class="link">3.校园卡怎么充值？...</router-link>
              <Divider/>
            </Card>
          </Col>
        </Row>
      </div>
    </div>
  </Card>
</template>

<script>
import {introRead, guideRead, announcementRead, ruleRead} from '@/api/campuscardInfo'
export default {
  props: {

  },
  data () {
    return {
      introList: [],
      guideList: [],
      announcementList: [],
      ruleList: []
    }
  },
  computed: {

  },
  mounted () {
    this.$Spin.show()
    introRead().then(response => {
      this.introList = response.data.obj
    }).catch(error => {
      console.log(error)
      this.$Spin.hide()
    })

    guideRead().then(response => {
      this.guideList = response.data.obj
    }).catch(error => {
      console.log(error)
      this.$Spin.hide()
    })

    announcementRead().then(response => {
      this.announcementList = response.data.obj
    }).catch(error => {
      console.log(error)
      this.$Spin.hide()
    })

    ruleRead().then(response => {
      this.ruleList = response.data.obj
      this.$Spin.hide()
    }).catch(error => {
      console.log(error)
      this.$Spin.hide()
    })
  }
}
</script>

<style scoped>
.link {
  color: black
}
.link:hover {
  color: #0066cc
}
</style>
