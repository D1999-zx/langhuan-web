<template>
  <div class="demo-type">
    <div>
      <el-avatar src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png" @click="open"></el-avatar>
    </div>
  </div>
<!--  <el-upload-->
<!--      class="upload-demo"-->
<!--      drag-->
<!--      action="https://jsonplaceholder.typicode.com/posts/"-->
<!--      multiple-->
<!--      >-->
<!--    <i class="el-icon-upload"></i>-->
<!--    <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>-->
<!--    <div class="el-upload__tip" slot="tip">只能上传jpg/png文件，且不超过500kb</div>-->
<!--  </el-upload>-->
</template>

<script>
export default {
  name: "userinfo.vue",
  data() {
    return {
      flag: false
    };
  },
  created() {
  },
  methods :{
    open(){
    }
  }
}
</script>

<style scoped>

</style>