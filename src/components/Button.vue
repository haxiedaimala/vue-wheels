<script setup lang="ts">
</script>

<template>
  <button class="gulu-button">
    <slot/>
  </button>
</template>

<style scoped lang="scss">
.gulu-button {
  font-size: var(--font-size);
  height: var(--button-height);
  padding: 0 1em;
  border: 1px solid var(--border-color);
  border-radius: var(--border-radius);
  background: var(--button-bg);

  &:hover {
    border-color: var(--border-color-hover);
  }

  &:active {
    background: var(--button-active-bg);
  }

  &:focus {
    outline: none;
  }
}

</style>