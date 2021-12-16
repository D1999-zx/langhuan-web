<template>
  <div>
    <navigation> </navigation>
    我的主页
  </div>
</template>

<script>

import navigation from "../../components/navigation";

export default {
  name: "index.vue",
  components: {
    navigation
  },
  mounted() {
    console.log('当前用户：', this.$store.state.user)
  },
}
</script>

<style scoped>

</style>