<!-- Home.vue -->
<template>
  <TopNav />
  <div class="Home">
    <span>我就是主页</span>
    <router-link to="/doc">快速开始！</router-link>
  </div>
</template>

<script lang="ts">
import TopNav from '../components/TopNav.vue'
export default {
  components: {
    TopNav
  },
  setup() {

  }
}
</script>

<style lang="scss" scoped>
.Home {
  display: flex;
  justify-content: center;
  align-items: center;
  height: calc(100vh - 60px);
}

</style>
