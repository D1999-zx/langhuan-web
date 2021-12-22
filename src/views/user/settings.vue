<template>
  <div>
    <navigation> </navigation>

    <el-row class="tac">
      <el-col :span="12" :offset="6" >
        <el-tabs :tab-position="tabPosition" @tab-click="tabclick">
          <el-tab-pane label="个人资料">
            <router-view ></router-view>
          </el-tab-pane>
          <el-tab-pane label="账号管理">
            <router-view ></router-view>
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
      tabPosition: 'left'
    };
  },
  methods: {
    tabclick(tab){
      if(tab.label=='个人资料'){
        this.$router.push('/user/info')
      }
      if(tab.label=='账号管理'){
        this.$router.push('/settings/user')
      }
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