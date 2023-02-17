<script setup lang="ts">
const props = defineProps({
  icon: String,
  iconPosition: {
    type: String,
    default: 'left',
    validator: (val: string) => {
      return ['left', 'right'].indexOf(val) !== -1;
    }
  },
  loading: {
    type: Boolean,
    default: false
  }
});
const emit = defineEmits<{
  (e: 'update:loading', value: boolean): void
}>();
const toggle = () => {
  emit('update:loading', !props.loading);
};
</script>

<template>
  <button class="gulu-button" :class="{[`gulu-icon-${iconPosition}`]:iconPosition}" @click="toggle">
    <g-icon v-if="icon&&!loading" class="gulu-icon" :name="icon"/>
    <g-icon v-if="loading" class="gulu-loading" name="loading"></g-icon>
    <slot/>
  </button>
</template>

<style lang="scss">
@keyframes gulu-spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

.gulu-button {
  font-size: var(--font-size);
  height: var(--button-height);
  padding: 0 .8em;
  border: 1px solid var(--border-color);
  border-radius: var(--border-radius);
  background: var(--button-bg);
  display: inline-flex;
  justify-content: center;
  align-items: center;
  vertical-align: middle;

  .gulu-icon {
    order: -1;
    margin: 0 .3em 0 0;
  }

  &.gulu-icon-right {
    .gulu-icon {
      order: 2;
      margin: 0 0 0 .3em;
    }
  }

  &:hover {
    border-color: var(--border-color-hover);
  }

  &:active {
    background: var(--button-active-bg);
  }

  &:focus {
    outline: none;
  }

  .gulu-loading {
    animation: gulu-spin 2s infinite linear;
  }
}

</style>