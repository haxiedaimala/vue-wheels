<template>
  <div class="gulu-button-group">
    <slot/>
  </div>
</template>

<script setup lang="ts">
</script>

<style lang="scss" scoped>
.gulu-button-group {
  display: inline-flex;
  vertical-align: middle;

  :deep(.gulu-button) {
    border-radius: 0;
    margin-left: -1px;

    &:nth-child(1) {
      border-top-left-radius: var(--border-radius);
      border-bottom-left-radius: var(--border-radius);
    }

    &:last-child {
      border-top-right-radius: var(--border-radius);
      border-bottom-right-radius: var(--border-radius);
    }

    &:hover {
      position: relative;
      z-index: 1;
    }
  }
}
</style>