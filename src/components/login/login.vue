<template>
  <div class="login">
    <form class="form-box">
      <h3 class="title">登录系统</h3>
      <div class="el-form-item">
        <div class="el-form-item__content">
          <span class="svg_login">
            <svg class="icon" width="20px" height="20px" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"><path fill="#879aa3" d="M515.413333 600.746667c146.773333 0 266.24-119.466667 266.24-266.24 0-146.773333-119.466667-266.24-266.24-266.24-146.773333 0-266.24 119.466667-266.24 266.24C249.173333 481.28 368.64 600.746667 515.413333 600.746667zM679.253333 641.706667c-44.373333 37.546667-102.4 58.026667-163.84 58.026667-64.853333 0-122.88-23.893333-167.253333-58.026667-153.6 51.2-262.826667 174.08-262.826667 314.026667 0 10.24 0 23.893333 3.413333 34.133333l849.92 0c0-10.24 3.413333-23.893333 3.413333-34.133333C938.666667 815.786667 832.853333 692.906667 679.253333 641.706667z" /></svg>
          </span>
          <div class="el-input-box">
            <el-input v-model="username" placeholder="账号"></el-input>
          </div>
        </div>
      </div>
      <div class="el-form-item">
        <div class="el-form-item__content">
          <span class="svg_login">
            <svg class="icon" width="20px" height="20px" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"><path fill="#879aa3" d="M818.398966 426.663002V298.648508S818.359984 0 519.750458 0 221.101949 298.648508 221.101949 298.648508V426.663002H93.087456V1024h853.327003V426.663002H818.398966zM562.408962 756.149416v139.836091h-85.317008v-139.836091c-25.3814-14.786242-42.658504-42.025793-42.658504-73.49541 0-47.165444 38.230527-85.35599 85.317008-85.35599s85.317007 38.190546 85.317007 85.35599c0.039982 31.469617-17.237122 58.709168-42.658503 73.49541m170.673996-329.525397H306.418957v-127.421764c0.474783-35.739666 13.047037-213.885248 213.331501-213.885248s212.856718 178.145582 213.331501 213.331501v127.975511z"  /></svg>
          </span>
          <div class="el-input-box">
            <el-input v-model="password" placeholder="密码" type="password"></el-input>
          </div>
        </div>
      </div>
      <el-button type="primary" @click="login">登录</el-button>
    </form>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        username: 'admin',
        password: '123456'
      }
    },
    methods: {
      login: function () {
        // var userInfo = {
        //   username: this.username,
        //   password: this.password
        // }
        // this.axios.post('http://www.xxx.com/api/', userInfo).then(res => {
        //   if (res.data.status == 200) {
        //     this.$store.dispatch('login', res.data.token)
        //     this.$router.push({path: './list'})
        //   }
        // })
        var token = Math.random()
        this.$store.dispatch('login', token)
        this.$router.push({path: './list'})
      }
    }
  }
</script>
<style lang='sass'>
  .login
    background: #2d3a4b
    width: 100%
    height: 100%
    height: 100vh
    .form-box
      width: 400px
      padding: 35px 35px 15px
      margin: 120px auto
      position: absolute
      left: 0
      right: 0
    .title
      font-size: 26px
      color: #eee
      text-align: center
      font-weight: 700
      margin-bottom: 40px
    .el-form-item
      .el-form-item__content
        border: 1px solid rgba(255,255,255,.1)
        border-radius: 4px
        overflow: hidden
        background: rgba(0,0,0,.1)
        .svg_login
          display: inline-block
          font-size: 20px
          margin-left: 15px
          vertical-align: middle
        .el-input-box
          display: inline-block
          width: 280px
          height: 50px
          input
            border: none
            outline: none
            background: transparent
            color: #eee
            height: 50px
            line-height: 50px
    .el-button
      width: 100%
      span
        font-size: 16px
</style>