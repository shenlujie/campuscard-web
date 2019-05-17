<template>
  <div class="layout">
    <!-- <myHeader/> -->
    <myNav/>
    <router-view></router-view>
    <myFooter/>
  </div>
</template>

<script>
import myNav from '@/views/layout/navigation/index'
import myFooter from '@/views/layout/footer/index'

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
    myNav,
    myFooter
  }
}
</script>

<style scoped>

</style>
