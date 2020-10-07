<template>
  <div class="TopNav">
    <button class="NavBtn" @click="openAside">==</button>
    <img class="logo" @click="goHome" alt="Vue logo" src="../assets/logo.png" width="30" height="30" />
    <ul class="menu">
      <li>xxx</li>
      <li>yyy</li>
      <li>zzz</li>
    </ul>
  </div>
</template>

<script lang="ts">
import { ref, inject } from "vue";

export default {
  setup() {
    const goHome = () => {
      console.log('1111111')
    }
    const openAside = () => {
      asideVisible.value = !asideVisible.value
    }
    const asideVisible = inject('asideVisible')
    return { goHome, openAside, asideVisible }
  }
}
</script>

<style lang="scss" scoped>
.TopNav {
  background-color: rgba(45, 158, 250, .3);
  padding: 10px;
  display: flex;
  justifiy-content: center;
  item-align: center;

  .NavBtn {
    display: none;
  }

  .logo {
    margin-left: 20px;
  }

  .menu {
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    right: 0;
    margin: auto 0;

    li {
      margin-right: 10px;
    }
  }
}
@media(max-width: 500px) {
  .TopNav {
    padding-left: 0px;

    .logo {
      margin: auto;
    }

    .menu {
      display: none;
    }

    .NavBtn {
      display: inline-block;
      position: absolute;
      left: 10px;
    }
  }
}</style>
