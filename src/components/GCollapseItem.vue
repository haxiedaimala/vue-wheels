<script setup lang="ts">
defineProps({
  title: {
    type: String,
    require: true
  },
  name: {
    type: [String, Array],
    require: true
  }
});
</script>

<template>
  <slot/>
</template>

<style lang="scss" scoped>

</style>