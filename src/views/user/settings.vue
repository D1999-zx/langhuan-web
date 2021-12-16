<template>
  <div>
    <navigation> </navigation>

    <el-row class="tac">
      <el-col :span="12" :offset="6" >
        <el-tabs :tab-position="tabPosition" style="height: 600px;" >
          <el-tab-pane label="个人资料">
            个人资料
          </el-tab-pane>
          <el-tab-pane label="账号管理">
            <div v-if="flag">
              <ul class="settings-content">
                <li class="settings-li cancel-border">
                  <span class="settings-title">密码</span>
                  <span class="settings-operate" @click="handleClick">修改密码</span>
                </li>
                <li class="settings-li">
                  <span class="settings-title">手机</span>
                  <span class="settings-operate" @click="$router.push('/mobile/edit')">修改手机</span>
                </li>
                <li class="settings-li">
                  <span class="settings-title">邮箱</span>
                  <span class="settings-operate" @click="$router.push('/mail/edit')">修改邮箱</span>
                </li>
                <li class="settings-li">
                  <span class="settings-title">第三方账户</span>
                  <span class="settings-operate" @click="$router.push('/account/bind')">前往绑定</span>
                </li>
                <li class="settings-li">
                  <span class="settings-title">登陆记录</span>
                  <span class="settings-operate" @click="$router.push('/history/login')">查看记录</span>
                </li>
                <li class="settings-li">
                  <span class="settings-title">注销</span>
                  <span class="settings-operate" @click="$router.push('/account/logout')">立即注销</span>
                </li>
              </ul>
            </div>
            <router-view v-else></router-view>
          </el-tab-pane>
        </el-tabs>

      </el-col>


    </el-row>

  </div>
</template>

<script>

import navigation from "../../components/navigation";

export default {
  name: "settings.vue",
  data() {
    return {
      flag: true,
      tabPosition: 'left'
    };
  },
  methods: {
    handleClick(){
      this.flag = !this.flag
      this.$router.push('/user/settings/password/edit')
    }

  },
  components: {
    navigation
  },
  mounted() {
    console.log('当前用户：', this.$store.state.user)
  },
}
</script>

<style scoped>

.tac{
  margin-top: 20px;
}

li {
  list-style-type:none;
  border-top: 1px solid #f0f0f5
}

.settings-li{
  display: flex;
  justify-content: space-between;
  height: 100px;
  align-items: center;
}

.settings-title{
  color: #555666;
  font-size: 18px;
  float: left;
  padding-left: 4px;
}

.settings-operate{
  color: #1989fa;
  font-size: 18px;
  float: right;
  padding-right: 4px;
}

.settings-operate:hover{
  cursor:pointer
}

.cancel-border{
  border: 0px;
}
</style>