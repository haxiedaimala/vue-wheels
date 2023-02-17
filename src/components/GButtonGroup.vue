<script setup lang="ts">
import {useSlots} from 'vue';
import GButton from './GButton.vue';

const slots = useSlots().default!();
slots.forEach(node => {
  if (node.type !== GButton) {
    throw new Error(`g-button-group 组件的子元素只能是 g-button，但是你写的是 ${JSON.stringify(node.type)}`);
  }
});

</script>

<template>
  <div class="gulu-button-group">
    <slot/>
  </div>
</template>

<style lang="scss" scoped>
.gulu-button-group {
  display: inline-flex;
  vertical-align: middle;

  :deep(.gulu-button) {
    border-radius: 0;

    &:not(:first-child) {
      margin-left: -1px;
    }

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