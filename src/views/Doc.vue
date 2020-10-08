<!-- Doc.vue -->
<template>
  <TopNav />
  <div class="Doc">
    <aside v-if="asideVisible" class="Aside">
      <h2>文档</h2>
      <ol>
        <li>
          <router-link to="/doc/intro">介绍</router-link>
        </li>
        <li>
          <router-link to="/doc/install">安装</router-link>
        </li>
        <li>
          <router-link to="/doc/get-started">开始使用</router-link>
        </li>
      </ol>
      <h2>组件列表</h2>
      <ol>
        <li>
          <router-link to="/doc/switch">Switch 组件</router-link>
        </li>
        <li>
          <router-link to="/doc/button">Button 组件</router-link>
        </li>
        <li>
          <router-link to="/doc/dialog">Dialog 组件</router-link>
        </li>
        <li>
          <router-link to="/doc/tabs">Tabs 组件</router-link>
        </li>
      </ol>
    </aside>
    <main>
      <router-view />
    </main>
  </div>
</template>

<script lang="ts">
import { inject } from 'vue'
import TopNav from '../components/TopNav.vue'
export default {
  components: {
    TopNav
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
    padding-right: 20px;
    background-color: #fff;
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
