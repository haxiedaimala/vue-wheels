<script setup lang="ts">
</script>

<template>
  <div class="gulu-toast">
    <slot/>
  </div>
</template>

<style lang="scss" scoped>
$toast-height: 40px;
$toast-bg: rgba(0, 0, 0, 0.75);
.gulu-toast{
  position: fixed;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  font-size: var(--font-size);
  height: $toast-height;
  line-height: 1.8;
  background: $toast-bg;
  color: white;
  border-radius: var(--border-radius);
  box-shadow: 0 0 3px rgba(0,0,0,.5);
  display: flex;
  align-items: center;
  padding: 0 16px;
}
</style>