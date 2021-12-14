<template>
  <div>
    <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
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
    </el-menu>
    <el-row class="demo-avatar demo-basic">
      <div class="demo-type">
        <div>
          <el-avatar icon="el-icon-user-solid" ></el-avatar>
        </div>
      </div>
    </el-row>
    <el-popover
        placement="top-start"
        title="标题"
        width="200"
        trigger="hover"
        content="这是一段内容,这是一段内容,这是一段内容,这是一段内容。">
      <el-button slot="reference">hover 激活</el-button>
    </el-popover>
  </div>
</template>

<script>
export default {
  name: "header.vue",
  data() {
    return {
      activeIndex: '1',
      activeIndex2: '1'
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    }
  }
}
</script>

<style scoped>

</style>