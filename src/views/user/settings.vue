<template>
  <div>
    <navigation> </navigation>
    设置
  </div>
</template>

<script>

import navigation from "../../components/navigation";

export default {
  name: "settings.vue",
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