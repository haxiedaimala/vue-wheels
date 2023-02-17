<template>
  <svg class="gulu-icon" aria-hidden="true">
    <use :xlink:href="`#i-${name}`"></use>
  </svg>
</template>

<script setup lang="ts">
defineProps({
  name: String
});
</script>

<style lang="scss" scoped>
.gulu-icon {
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
</style>