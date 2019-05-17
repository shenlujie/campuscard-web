<template>
  <Card style="height: 50px; margin-bottom: 10px">
    <Breadcrumb>
      <BreadcrumbItem to="/">
        <Icon type="ios-home" />
        首页
      </BreadcrumbItem>
      <BreadcrumbItem>{{getBreadInfo}}</BreadcrumbItem>
    </Breadcrumb>
  </Card>
</template>

<script>
export default {
  data () {
    return {
      breadInfo: ''
    }
  },
  computed: {
    getBreadInfo: function () {
      let cur = this.$route.path
      if (cur.startsWith('/intro')) {
        return this.breadInfo = '一卡通简介'
      } else if (cur.startsWith('/rule')) {
        return this.breadInfo = '管理条例'
      } else if (cur.startsWith('/guide')) {
        return this.breadInfo = '使用指南'
      } else if (cur.startsWith('/announcement')) {
        return this.breadInfo = '信息公告'
      } else if (cur.startsWith('/announceDetail')) {
        return this.breadInfo = '公告详情'
      } else if (cur.startsWith('/lost')) {
        return this.breadInfo = '失卡招领'
      } else if (cur.startsWith('/consume_detail')) {
        return this.breadInfo = '消费详情'
      } else if (cur.startsWith('/reissue_card')) {
        return this.breadInfo = '补卡、挂失、解挂'
      } else if (cur.startsWith('/chat_online')) {
        return this.breadInfo = '在线咨询'
      } else if (cur.startsWith('/leader_mail')) {
        return this.breadInfo = '领导邮箱'
      } else if (cur.startsWith('/contact_us')) {
        return this.breadInfo = '联系我们'
      } else if (cur.startsWith('/personHome')) {
        return this.breadInfo = '个人中心'
      } else if (cur.startsWith('/404')) {
        return this.breadInfo = '404'
      }
    }
  }
}
</script>

<style scoped>
</style>
