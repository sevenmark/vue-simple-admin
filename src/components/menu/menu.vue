<template>
  <div class="menu">
    <ul>
      <li><router-link to="/add">添加</router-link></li>
      <li><router-link to="/list">列表</router-link></li>
    </ul>
  </div>
</template>
<style lang="sass">
.menu
  ul
    padding: 30px 0 0 0
    li
      line-height: 36px
      a
        color: #fff
        font-size: 16px
        display: block
        padding-left: 30px
      .router-link-active
        background: #4b6380


</style>