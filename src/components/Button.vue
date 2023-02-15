<script setup lang="ts">
</script>

<template>
  <button class="gulu-button">按钮</button>
</template>

<style scoped>
.gulu-button {
  font-size: var(--font-size);
  height: var(--button-height);
  padding: 0 1em;
  border: 1px solid var(--border-color);
  border-radius: var(--border-radius);
  background: var(--button-bg);
}

.gulu-button:hover {
  border-color: var(--border-color-hover);
}

.gulu-button:active {
  background: var(--button-active-bg);
}

.gulu-button:focus {
  outline: none;
}
</style>