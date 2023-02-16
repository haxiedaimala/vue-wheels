<script setup lang="ts">
defineProps({
  icon: String,
  iconPosition: {
    type: String,
    default: 'left',
    validator: (val: string) => {
      return ['left', 'right'].indexOf(val) !== -1;
    }
  }
});
</script>

<template>
  <button class="gulu-button" :class="{[`gulu-icon-${iconPosition}`]:iconPosition}">
    <svg v-if="icon" class="icon" aria-hidden="true">
      <use :xlink:href="`#i-${icon}`"></use>
    </svg>
    <slot/>
  </button>
</template>

<style lang="scss">
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

  .icon {
    order: -1;
    margin: 0 .3em 0 0;
  }

  &.gulu-icon-right {
    .icon {
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

}

</style>