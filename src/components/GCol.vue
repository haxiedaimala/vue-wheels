<script setup lang="ts">
defineProps({
  span: {
    type: [String, Number]
  }
});
</script>

<template>
  <div class="gulu-layout-col" :class="`span-${span}`">
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
      width: ($n / 24) * 100%;
    }
  }
}
</style>