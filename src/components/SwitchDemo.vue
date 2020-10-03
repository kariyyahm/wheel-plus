<template>
  <h1>{{ msg }}</h1>
</template>

<script lang="ts">
export default {
  props: {
    msg: {
      type: String,
      default: '我就是那个switch'
    }
  },
  data() {
    return {}
  }
}
</script>
