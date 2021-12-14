<template>
  <div class="box">

    <div class="content" v-if="flag">
      登陆
      <el-form ref="loginForm" :rules="rules" :model="loginForm" label-width="65px">
        <el-form-item label="手机号" prop="mobile">
          <el-input v-model="loginForm.mobile"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input v-model="loginForm.password"></el-input>
        </el-form-item>

        <el-form-item>
          <el-button type="primary" @click="loginSubmit">登 陆</el-button>
          <el-button type="primary" @click="flag = !flag">注 册</el-button>
        </el-form-item>
      </el-form>
    </div>

    <div class="content1" v-else>
      注册
      <el-form ref="registerForm" :rules="rules" :model="registerForm" label-width="65px">
        <el-form-item label="手机号" prop="mobile">
          <el-input v-model="registerForm.mobile"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input v-model="registerForm.password"></el-input>
        </el-form-item>

        <el-form-item>
          <el-button type="primary" @click="flag = !flag">登 陆</el-button>
          <el-button type="primary" @click="registerSubmit">注 册</el-button>
        </el-form-item>
      </el-form>
    </div>

  </div>
</template>

<script>
import utils from "../../assets/js/utils";
import {postRequest} from "@/assets/js/api";
import {getRequest} from "@/assets/js/api";
import store from '../../store/index'
export default {
  name: "login",
  data(){
    return{
      flag: true,
      loginForm:{
        mobile:'',
        password:''
      },
      registerForm:{
        mobile:'',
        password:''
      },
      rules: {
        mobile: [
          {required: true, message: '请输入手机号', trigger: 'blur'}
        ],
        password: [
          {required: true, message: '请输入密码', trigger: 'blur'}
        ]
      }
    }
  },

  methods:{
    loginSubmit() {
      this.$refs.loginForm.validate((valid) => {
        if (valid) {
          postRequest('/login/login' ,this.loginForm).then(result => {
            utils.setToken(result.token.token.token)
            getRequest('/user/user?mobile=' + this.loginForm.mobile , {}).then(result => {
              console.log(result.user);
              store.state.user = result.user;
            })
            this.$router.push({path:'/index'})

          })
        } else {
          console.log('账户或者密码不正确');
          return false;
        }
      });
    },
    registerSubmit() {
      this.$refs.registerForm.validate((valid) => {
        if (valid) {
          postRequest('/register/register' ,this.registerForm).then(
            this.$router.push({path:'/login'})
          )
        } else {
          console.log('注册失败');
          return false;
        }
      });
    },
  },
  created() {
    if(utils.getCookie('access_token')){
      getRequest('/user/user' , {}).then(result => {
        console.log(result.user);
        store.state.user = result.user;
        this.$router.push('/index')
      })
    }
  }
}

</script>

<style scoped>
.content{
  width: 25%;
  height: 50vh;
  background: pink;
  padding:80px 80px 80px 60px;
  box-sizing: border-box;
}
.content1{
  width: 25%;
  height: 50vh;
  background: #11ff00;
  padding:80px 80px 80px 60px;
  box-sizing: border-box;
}
.box{
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>