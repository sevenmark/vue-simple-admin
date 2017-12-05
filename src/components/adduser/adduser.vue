<template>
  <div class="adduser">
    <el-form ref="form" :model="form" label-width="80px">
      <el-form-item label="用户名">
        <el-input v-model="form.name"></el-input>
      </el-form-item>
      <el-form-item label="省份">
        <el-select v-model="form.region" placeholder="请选择省份">
          <el-option label="上海" value="shanghai"></el-option>
          <el-option label="北京" value="beijing"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="手机号">
        <el-input v-model="form.phone"></el-input>
      </el-form-item>
      <el-button type="primary" @click="onSubmit">确定</el-button>
    </el-form>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        form: {
          name: '',
          region: '',
          phone: ''
        }
      }
    },
    methods: {
      onSubmit: function () {
        console.log(1)
      }
    }
  }
</script>
<style lang='sass'>
  .adduser
    width: 500px
    margin: 20px auto
    button
      width: 100%
      span
        font-size: 20px
</style>