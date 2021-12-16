<template>

          <el-menu :default-active="activeIndex" class="el-menu-demo " mode="horizontal" @select="handleSelect">
            <el-row :gutter="20">

              <el-col :span="6" :offset="6">
                <div class="grid-content bg-purple">
                  <div class="grid-content bg-purple navigation-select">
                    <el-menu-item index="1">首页</el-menu-item>
                    <el-submenu index="2">
                      <template slot="title">我的工作台</template>
                      <el-menu-item index="2-1">个人中心</el-menu-item>
                      <el-menu-item index="2-2">我的钱包</el-menu-item>
                      <el-submenu index="2-3">
                        <template slot="title">内容管理</template>
                        <el-menu-item index="2-3-1">博客</el-menu-item>
                        <el-menu-item index="2-3-2">帖子</el-menu-item>
                      </el-submenu>
                    </el-submenu>
                  </div>
                </div>
              </el-col>

              <el-col :span="6" class="navigation-userinfo">
                <div class="grid-content bg-purple">
                  <div class="grid-content bg-purple-light">
                    <div class="demo-type">
                      <el-dropdown placement="bottom" @command="handleCommand">
                      <div>
                        <el-avatar icon="el-icon-user-solid" ></el-avatar>
                      </div>
                        <el-dropdown-menu slot="dropdown" >
                          <el-dropdown-item command = "1">
                            我的主页
                          </el-dropdown-item>
                          <el-dropdown-item command = "2">
                            设置
                          </el-dropdown-item>
                          <el-dropdown-item command = "3">
                            退出
                          </el-dropdown-item>
                        </el-dropdown-menu>
                      </el-dropdown>
                    </div>
                  </div>
                </div>
              </el-col>
            </el-row>
          </el-menu>

</template>

<script>

import utils from "../assets/js/utils";

export default {
  name: "navigation.vue",
  data() {
    return {
      activeIndex: '1',
      activeIndex2: '1'
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    },
    handleCommand(command){
      if('1' === command){
        this.$router.push('/userIndex')
      }else if('2' === command){
        this.$router.push('/userSettings')
      }else{
        utils.clearMess(),
        this.$router.push('/login')
      }
    }
  }
}


</script>

<style scoped>

.navigation-select{
  display: flex;
  justify-content: left
}

.navigation-userinfo{
  display: flex;justify-content: right
}
</style>