<template>
  <el-table
      :data="tableData"
      style="width: 100%"
      height="700">
    <el-table-column
        fixed
        prop="createDate"
        label="日期"
        width="350">
    </el-table-column>
    <el-table-column
        prop="remoteAddr"
        label="登陆ip"
        width="350">
    </el-table-column>
  </el-table>
</template>

<script>

import {getRequest} from "@/assets/js/api";
import store from '../../store/index'

export default {
  name: "loginHistory",
  data() {
    return {
      id: store.state.user.id,
      tableData: []
    }
  },
  created(){
    this.getlist()
  },
  methods: {
    getlist(){
      getRequest('/log/history?id='+ this.id, {}).then(result =>{
        console.log(result);
        this.tableData = result.message.list
      })
    }
  }
}
</script>

<style scoped>

</style>