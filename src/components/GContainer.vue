<script setup lang="ts">
import GAside from './GAside.vue';
import {ref, useSlots} from 'vue';

const hasAside = ref(false);
const slots = useSlots().default!();
slots.forEach(node => {
  if (node.type == GAside) {
    hasAside.value = true;
  }
});
</script>

<template>
  <div class="gulu-container" :class="{['gulu-container-hasAside']:hasAside}">
    <slot/>
  </div>
</template>

<style lang="scss" scoped>
.gulu-container {
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  border: 3px solid blue;

  &.gulu-container-hasAside {
    flex-grow: 1;
    flex-direction: row;
  }
}
</style>