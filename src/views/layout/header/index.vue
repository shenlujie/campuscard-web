<template>
  <div class="header">
    <img class='nuclogo' :src="nuclogo" alt>
    <div style="float: right">
        <Input search enter-button placeholder="Enter something..."/>
    </div>
  </div>
</template>

<script>
import nuclogo from '@/assets/images/logo_NUC_white.png'
export default {
  data () {
    return {
      nuclogo
    }
  }
}
</script>

<style scoped>
.header {
  margin: 20px auto;
  /* padding: 10px; */
  width: 74%;
  height: 80px;
  /* background-color: #003366; */
}
.nuclogo {
  height: 120px;
}
</style>
