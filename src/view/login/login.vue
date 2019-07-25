<template>
  <div class="login-container">
    
    <el-form :model="userInfo" :rules="userInfoRules" label-width="100px" class="user-form">
    <!-- <Form :model="userInfo" :rules="userInfoRules" label-width="100px" class="user-form"> -->
      <h2 class="login-tit">Web Cancellation</h2>
      <el-form-item prop="username" style='margin-top:30px;'>
        <el-input v-model="userInfo.username" type="text" placeholder="请输入账号" autocomplete="off" @keyup.enter.native="watchKeyCode"/>
      </el-form-item>
      <el-form-item prop="password">
        <el-input v-model="userInfo.password" type="text" maxlength="8" placeholder="请输入密码" autocomplete="off" @keyup.enter.native="watchKeyCode"/>
      </el-form-item>
      <el-button class="login-btn"  @click="userLogin">Login</el-button>
    </el-form>
      <!-- <FormItem prop="username" style='margin-top:30px;'>
            <Input type="text" v-model="userInfo.username" placeholder="Username">
                <Icon type="ios-person-outline" slot="prepend"></Icon>
            </Input>
        </FormItem>
         <FormItem prop="password">
          <Input type="password" v-model="userInfo.password" placeholder="Password">
              <Icon type="ios-lock-outline" slot="prepend"></Icon>
          </Input>
      </FormItem>
      <FormItem>
          <Button class='login-btn' type="primary" @click="userLogin">Login</Button>
      </FormItem>
    </Form> -->
      
  </div>
</template>
<script>
const username = (rule, value, callback) => {
  if (value === '') {
    callback(new Error('账号不能为空'))
  }
}
const password = (rule, value, callback) => {
  if (value === '') {
    callback(new Error('密码不能为空'))
  }
}
export default {
  data() {
    return {
      userInfo: {
        username: '',
        password: ''
      },
      userInfoRules: {
        username: [
          { validator: username, trigger: 'change' }
        ],
        authCode: [
          { validator: password, trigger: 'change' }
        ]
      }
    }
  },
  methods: {
    watchKeyCode() {

    },
    userLogin() {
      if (this.userInfo.username !== '' && this.userInfo.password !== '') {
        localStorage.setItem('roles', 'editor')
        this.$router.push('/order')
      }
    }
  }
}

</script>

<style scoped lang='scss'>
.login-container {
  min-height: 100%;
  width: 100%;
  background-color: #2d3a4b;
  overflow: hidden;
  position: relative;
  color: #fff;
  background: url('../../assets/images/logins.jpg')no-repeat;
  background-size:100% 100%;
  .user-form {
    width: 400px;
    min-height: 350px;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    background:#fff;
  }
}
.login-container /deep/ .el-form-item__content {
  // background: rgba(0, 0, 0, 0.1);
  margin-left: 0!important;
  height: 56px;
  border: 1px solid rgba(48, 43, 43, 0.1);
  border:1px solid #fff;
  border-radius: 8px;
  .el-input {
    height: 100%;
  }
  .el-input__inner {
    height: 90%;
    background: none;
    width:90%;
    margin-left:5%;
  }
  .el-form-item__error {
    left: 5px;
  
  }
}

.login-tit {
  text-align: center;
  line-height: 50px;
  font-size:20px;
  color:#fff;
  background:skyblue;
  // margin-bottom: 20px;
}
.login-btn {
  width: 90%;
  height: 48px;
  margin-left:5%;
  background: skyblue;
  color:#fff;
  font-size:20px;
}
</style>
