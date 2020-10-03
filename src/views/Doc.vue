<!-- Doc.vue -->
<template>
  <TopNav />
  <div class="Doc">
    <Aside v-if="asideVisible" class="Aside"></Aside>
    <router-view></router-view>
  </div>
</template>

<script lang="ts">
import { inject } from 'vue'
import TopNav from '../components/TopNav.vue'
import Aside from '../components/Aside.vue'
export default {
  components: {
    TopNav,
    Aside
  },
  setup() {
    const asideVisible = inject('asideVisible')
    return { asideVisible }
  }
}
</script>

<style lang="scss" scoped>
.Doc{
  display: flex;

  .Aside {

  }
}
@media (max-width: 500px) {
  .Doc{


    .Aside {
      position: absolute;
      left: 0;
    }
  }
}



</style>
