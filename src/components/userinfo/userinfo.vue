<template>

    <div>
      <el-button type="text" @click="dialogVisible = true">点击打开 Dialog</el-button>


        <el-dialog
            title="提示"
            :visible.sync="dialogVisible"
            width="30%">
        <span>
          <el-upload
              class="upload-demo"
              drag
              action="https://jsonplaceholder.typicode.com/posts/"
              multiple>
            <i class="el-icon-upload"></i>
            <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
            <div class="el-upload__tip" slot="tip">只能上传jpg/png文件，且不超过500kb</div>
          </el-upload>
        </span>
          <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
        </span>
        </el-dialog>
    </div>

</template>

<script>
export default {
  name: "userinfo.vue",
  data() {
    return {
      dialogVisible: false
    };
  },
  methods: {
  }
}
</script>

<style scoped>

</style>