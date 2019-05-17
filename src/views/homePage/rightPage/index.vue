<template>
  <Card>
    <div>
      <div class="level1" style="height: 50%">
        <Row :gutter="16">
          <Col span="12">
            <Card style="width:100%">
              <p slot="title">
                <Icon type="ios-calendar-outline" />信息公告
              </p>
              <a href="#" slot="extra" @click.prevent="changeLimit">
                <Icon type="ios-loop-strong"></Icon>···更多
              </a>
              <div v-for="(item, index) in announcementList" :key="index">
                {{item.title}}
              </div>
            </Card>
          </Col>
          <Col span="12">
            <Card style="width:100%">
              <p slot="title">
                <Icon type="ios-clipboard-outline"/>一卡通简介
              </p>
              <a href="#" slot="extra" @click.prevent="changeLimit">
                <Icon type="ios-loop-strong"></Icon>···更多
              </a>
              <div v-for="(item, index) in announcementList" :key="index">
                {{item.title}}
              </div>
            </Card>
          </Col>
        </Row>
      </div>
      <div class="level2">
        <Row :gutter="16">
          <Col span="12">
            <Card style="width:100%">
              <p slot="title">
                <Icon type="ios-construct-outline" />管理条例
              </p>
              <a href="#" slot="extra" @click.prevent="changeLimit">
                <Icon type="ios-loop-strong"></Icon>···更多
              </a>
              <div v-for="(item, index) in announcementList" :key="index">
                {{item.title}}
              </div>
            </Card>
          </Col>
          <Col span="12">
            <Card style="width:100%">
              <p slot="title">
                <Icon type="ios-compass-outline" />使用指南
              </p>
              <a href="#" slot="extra" @click.prevent="changeLimit">
                <Icon type="ios-loop-strong"></Icon>···更多
              </a>
              <div v-for="(item, index) in announcementList" :key="index">
                {{item.title}}
              </div>
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
  created () {
    introRead().then(response => {
      this.introList = response.data.obj
    }).catch(error => {
      console.log(error)
    })

    guideRead().then(response => {
      this.guideList = response.data.obj
    }).catch(error => {
      console.log(error)
    })

    announcementRead().then(response => {
      this.announcementList = response.data.obj
    }).catch(error => {
      console.log(error)
    })

    ruleRead().then(response => {
      this.ruleList = response.data.obj
    }).catch(error => {
      console.log(error)
    })
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
</style>
