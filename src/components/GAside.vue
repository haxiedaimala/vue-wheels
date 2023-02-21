<script setup lang="ts">
import {onUpdated, ref} from 'vue';

const props = defineProps({
  visible: {
    type: Boolean,
    default: false
  }
});
const emits = defineEmits<{
  (e: 'update:visible', value: boolean): void
}>();
const toggle = () => {
  emits('update:visible', !props.visible);
};
const asideItem = ref<HTMLDivElement>();
onUpdated(() => {
  if (asideItem.value?.classList.contains('visible')) {
    asideItem.value.style.marginLeft = -(asideItem.value?.offsetWidth) + 'px';
  }
});
</script>

<template>
  <div class="gulu-aside" :class="{visible:!visible}" ref="asideItem">
    <slot/>
    <button @click="toggle" class="gulu-aside-button"/>
  </div>
</template>

<style lang="scss" scoped>
.gulu-aside {
  position: relative;
  transition: all 250ms;

  .gulu-aside-button {
    position: absolute;
    top: 0;
    right: 0;
    width: 1.5em;
    height: 1.5em;
    border: none;
    outline: none;
    background: transparent;
    cursor: pointer;

    &::after,
    &::before {
      content: '';
      position: absolute;
      top: 50%;
      left: 0;
      transform: translate(0, -50%);
      width: 1em;
      height: 1px;
      background: var(--color);
    }

    &::after {
      transform: rotate(45deg);
    }

    &::before {
      transform: rotate(135deg);
    }
  }
}
</style>