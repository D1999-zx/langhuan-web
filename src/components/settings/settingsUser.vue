<template>
  <div v-if="flag">
    <ul class="settings-content">
      <li class="settings-li cancel-border">
        <span class="settings-title">密码</span>
        <span class="settings-operate" @click="$router.push('/password/edit')">修改密码</span>
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
</template>

<script>


export default {
  name: "settingsUser",
  data() {
    return {
      flag: true,
      tabPosition: 'left'
    };
  },
  created() {
  },
  methods :{

  }
}
</script>

<style scoped>

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