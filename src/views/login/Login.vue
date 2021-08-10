<template>
  <div class="log-container">
    <div class="login-box">
      <h1 class="title">Loogin From</h1>
      <el-form ref='loginFrom' :model='loginFrom' :rules='loginRules' label-width="0px">
        <el-form-item prop='username'>
          <el-input v-model= 'loginFrom.username'  prefix-icon="el-icon-user-solid"></el-input>
        </el-form-item>
        <el-form-item prop='password'>
          <el-input 
            v-model= 'loginFrom.password' 
            prefix-icon="el-icon-lock" 
            :type='pwdType'
            >
             <i  slot='suffix' :class='eyeopen'  @click='changeType'></i>

            </el-input>
        </el-form-item>
      </el-form>
      <el-button type="primary" @click='login' style='width:100%'>Login</el-button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      //表单数据绑定
      loginFrom: {
        username: 'admin',
        password: '123456'
      },
      // 表单验证规则对象
      loginRules: {
         username: [
            { required: true, message: '请输入登录账号', trigger: 'blur' },
            { min: 3, max: 10, message: '长度在 3 到 10 个字符', trigger: 'blur' }
         ],
         password:[
           { required: true, message: '请输入登录密码', trigger: 'blur' },
           { min: 6, max: 15, message: '密码错误', trigger: 'blur' }
         ]
      },
      pwdType: 'password',
      eyeopen: 'iconfont icon-close'
    }
  },
  methods: {

    login() {
      this.$refs.loginFrom.validate(valid => {
        if (!valid) return
        this.$router.push('/layout')
      })
    },
    changeType() {
      this.pwdType = this.pwdType === 'password' ? '' : 'password';
      this.eyeopen = this.eyeopen === 'iconfont icon-open' ?'iconfont icon-close':'iconfont icon-open';
    },
	}
};

</script>

<style scoped>
.log-container {
  background-color: #283443;
  height: 100%;
}
.login-box {
  width: 450px;
  height: 300px;
  background-color:#283443;
  position: absolute;
  left: 50%;
  top: 25%;
  transform: translate(-50%);
}
.title {
  text-align: center;
  position: relative;
  top: -25%;
  color: #eee;
}
</style> 