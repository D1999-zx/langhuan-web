<template>
  <div>
    <el-input placeholder="请输原密码" v-model="passwordVo.passwordPre" show-password clearable></el-input>
    <el-input placeholder="请输新密码" v-model="passwordVo.passwordNew" show-password clearable></el-input>
    <el-input placeholder="请确认新密码" v-model="passwordCheck" show-password clearable></el-input>
    <el-button type="primary" :disabled="isBlank" @click="passwordEdit">确认</el-button>
  </div>
</template>

<script>

import {putRequest} from "@/assets/js/api";
import store from '../../store';
import utils from "../../assets/js/utils"

export default {
  name: "passwordEdit",
  data() {
    return {
      passwordVo:{
        id: store.state.user.id,
        passwordPre: '',
        passwordNew: ''
      },
      passwordCheck: this.passwordCheck
    }
  },
  computed:{
    isBlank(){
      return !(utils.isNotEmpty(this.passwordVo.passwordPre) && utils.isNotEmpty(this.passwordVo.passwordNew) && utils.isNotEmpty(this.passwordCheck))
    }
  },
  methods: {
    passwordEdit(){
      putRequest('/user/password',this.passwordVo).then(result =>{
        console.log(result);
      })
    }
  }
}
</script>

<style scoped>

</style>