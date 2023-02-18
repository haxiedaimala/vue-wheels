<script setup lang="ts">
import {computed} from 'vue';

const {span, offset} = defineProps({
  span: {
    type: [String, Number]
  },
  offset: {
    type: [String, Number]
  }
});
const colClass = computed(() => {
  return {
    [`span-${span}`]: span,
    [`offset-${offset}`]: offset
  };
});
</script>

<template>
  <div class="gulu-layout-col" :class="colClass">
    <slot/>
  </div>
</template>

<style lang="scss">
.gulu-layout-col {
  min-height: 50px;
  width: 50%;
  background: grey;
  border: 1px solid red;

  $class-prefix: span-;
  @for $n from 1 through 24 {
    &.#{$class-prefix}#{$n} {
      width: calc(#{$n} / 24 * 100%);
    }
  }
  $class-prefix: offset-;
  @for $n from 1 through 24 {
    &.#{$class-prefix}#{$n} {
      margin-left: calc(#{$n} / 24 * 100%);
    }
  }
}
</style>