<template>
  <div class="container">
    <BackTop></BackTop>
    <nav class="navbar navbar-expand-md fixed-top navbar-dark bg-dark">
      <router-link to="/" class="navbar-brand">
        <img
          src="@/assets/images/nuc_logo_white.png"
          width="90"
          height="30"
          class="d-inline-block align-top"
          alt
        >&nbsp;&nbsp;校园一卡通
      </router-link>
      <div class="navbar-collapse offcanvas-collapse" id="navbarsExampleDefault">
        <ul class="navbar-nav mr-auto">
          <!-- 综合信息 -->
          <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle"
              id="dropdown01"
              @mouseenter="divShow('div1')"
              @mouseleave="divHidden('div1')"
            >
              综合信息
              <div class="dropdown-menu" :style="styleShow1">
                <router-link to="/intro" class="dropdown-item">一卡通简介</router-link>
                <router-link to="/rule" class="dropdown-item">管理条例</router-link>
                <router-link to="/guide" class="dropdown-item">使用指南</router-link>
                <router-link to="/announcement" class="dropdown-item">信息公告</router-link>
              </div>
            </a>
          </li>
          <!-- 失卡招领 -->
          <li class="nav-item">
            <router-link to="/lost" class="nav-link">
              失卡招领
              <span class="sr-only">(current)</span>
            </router-link>
          </li>
          <!-- 业务办理 -->
          <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle"
              id="dropdown01"
              @mouseenter="divShow('div2')"
              @mouseleave="divHidden('div2')"
            >
              业务办理
              <div class="dropdown-menu" :style="styleShow2">
                <router-link to="/consume_detail" class="dropdown-item">查询消费详情</router-link>
                <router-link to="/reissue_card" class="dropdown-item">补卡、挂失、解挂</router-link>
              </div>
            </a>
          </li>
          <!-- 在线咨询 -->
          <li class="nav-item">
            <router-link to="/chat_online" class="nav-link">在线咨询</router-link>
          </li>
          <!-- 领导信箱 -->
          <li class="nav-item">
            <router-link to="/leader_mail" class="nav-link">领导信箱</router-link>
          </li>
          <!-- 联系我们 -->
          <li class="nav-item">
            <router-link to="/contact_us" class="nav-link">联系我们</router-link>
          </li>
        </ul>
        <form class="form-inline">
          <input class="form-control mr-sm-2" type="text" placeholder="输入关键字.." aria-label="Search">
          <button class="btn btn-success my-2 my-sm-0" type="submit">站内搜索</button>
          &nbsp;&nbsp;&nbsp;&nbsp;
        </form>
        <button class="btn btn-info" @click="toLogin" v-if="!isLogin">登录</button>
        <Dropdown trigger="click" style="margin-left: 20px" @on-click="handlePerson" v-if="isLogin">
          <a href="javascript:void(0)" style="color: white">
            <Avatar :src="userPng" size="large"/>
            {{userName}}
          </a>
          <DropdownMenu slot="list">
            <DropdownItem name="personHome">
              <Icon type="ios-contact-outline" />
              <strong>个人中心</strong>
            </DropdownItem>
            <DropdownItem divided name="logout">
              <Icon type="ios-exit-outline" />
              <strong>退出</strong>
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </div>
    </nav>
  </div>
</template>

<script>
import userImg from '@/assets/images/user.png'
export default {
  data () {
    return {
      isLogin: false,
      userPng: userImg,
      userName: '',
      styleShow1: {
        display: 'none'
      },
      styleShow2: {
        display: 'none'
      }
    }
  },
  methods: {
    divShow (div) {
      if (div === 'div1') {
        this.styleShow1 = {
          display: 'block'
        }
      } else {
        this.styleShow2 = {
          display: 'block'
        }
      }
    },
    divHidden (div) {
      if (div === 'div1') {
        this.styleShow1 = {
          display: 'none'
        }
      } else {
        this.styleShow2 = {
          display: 'none'
        }
      }
    },
    toLogin () {
      this.$router.push({path: '/login'})
    },
    handlePerson (name) {
      console.log(name)
      if (name === 'personHome') {
        this.$router.push({path: '/personHome'})
      } else if (name === 'logout') {
        this.$store.dispatch('FedLogOut').then(
          value => {
            location.reload()
          }
        )
      }
    }
  },
  mounted () {
    console.log(this.$store.getters.token)
    if (this.$store.getters.token) {
      this.isLogin = true
      this.userName = this.$store.getters.userInfo.stName
    }
  }
}
</script>

<style scoped>
.container {
  margin: 75px;
  font-size: 17px;
}
#dropdown01:hover {
  cursor: pointer;
}
</style>
