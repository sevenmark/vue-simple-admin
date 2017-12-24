<template>
  <div class="box">
    <myhead></myhead>
    <mymenu></mymenu>
    <div class="wrap">
      <router-view></router-view>
    </div>
  </div>
</template>
<script>
import myhead from '../head/head'
import mymenu from '../menu/menu'
export default {
  name: 'admin',
  components: {
    myhead,
    mymenu
  },
  created () {
    if (!this.$store.getters.token) {
      this.$router.push({path: './login'})
    }
  }
}
</script>
<style lang='sass'>
.header
  height: 50px
  background: #fff
  border-bottom: 1px solid #e6e6e6
  box-shadow: 0 1px 3px rgba(0,0,0,.12),0 0 3px rgba(0,0,0,.04)
  margin-left: 180px
.menu
  width: 180px
  position: fixed
  z-index: 7
  background: #314155
  top: 0
  left: 0
  height: 100%
  bottom: 0
.wrap
  margin-left: 200px
  margin-top: 10px
</style>
