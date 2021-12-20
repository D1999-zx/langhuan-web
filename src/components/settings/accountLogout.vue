<template>
    <el-button type="text" @click="open">注销</el-button>
</template>

<script>

import {deleteRequest} from "@/assets/js/api";
import store from "../../store";
import utils from "../../assets/js/utils";


export default {
  name: "accountLogout",
  data() {
    return {
      id: store.state.user.id
    }
  },
  methods :{
    open() {
      this.$confirm('此操作将永久删除改账户，是否操作', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        deleteRequest('/user/logoff?id='+this.id,{}).then(result =>{
          console.log(result);
          if(result.code == 0){
            this.$message({
              type: 'info',
              message: '注销成功'
            });
            utils.clearMess(),
            this.$router.push('/login')
          }
        })
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消'
        });
      });
    }
  }

}
</script>

<style scoped>

</style>