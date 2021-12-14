<template>
  <div class="home">
   baoqing
  </div>
</template>

<script>

export default {
  name: 'index',
  components: {
  },
  mounted() {
    console.log('当前用户：', this.$store.state.user)
  },
}
</script>
