<template>
  <div>
      <navigation> </navigation>
  </div>
</template>

<script>

import navigation from "../components/navigation";

export default {
  name: 'index',
  components: {
    navigation
  },
  mounted() {
    console.log('当前用户：', this.$store.state.user)
  },
}
</script>
