<template>
  <div class="header">
    <el-button @click="logout">退出</el-button>
  </div>
</template>

<script>
export default {
  methods: {
    logout: function () {
      this.$store.dispatch('logout')
      this.$router.push({path: './login'})
    }
  }
}
</script>
<style lang="sass">
.header
  .el-button
    float: right
    margin: 3px 10px 0 0
</style>