<script setup lang="ts">
defineProps({
  span: {
    type: [String, Number]
  },
  offset: {
    type: [String, Number]
  }
});
</script>

<template>
  <div class="gulu-layout-col" :class="{[`span-${span}`]:span,[`offset-${offset}`]:offset}">
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
  $class-prefix: offset-;
  @for $n from 1 through 24 {
    &.#{$class-prefix}#{$n} {
      margin-left: ($n / 24) * 100%;
    }
  }
}
</style>