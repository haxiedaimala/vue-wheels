<script setup lang="ts">
import {nextTick, ref} from 'vue';

const visible = ref(false);
const trigger = ref<HTMLSpanElement>();
const popover = ref<HTMLDivElement>();
const eventHandler = (e: MouseEvent) => {
  if (!popover.value?.contains(e.target as HTMLElement) && !trigger.value?.contains(e.target as HTMLElement)) {
    visible.value = false;
    document.removeEventListener('click', eventHandler);
  }
};
const positionContent = () => {
  const {top, left} = trigger.value!.getBoundingClientRect();
  popover.value!.style.left = left + window.scrollX + 'px';
  popover.value!.style.top = top + window.screenY + 'px';
};
const listenToDocument = () => {
  document.addEventListener('click', eventHandler);
};
const open = () => {
  nextTick(() => {
    positionContent();
    listenToDocument();
  });
};
const toggleVisible = (e: MouseEvent) => {
  if (trigger.value?.contains(e.target as HTMLElement)) {
    visible.value = !visible.value;
    if (visible.value === true) {
      open();
    }
  }
};
</script>

<template>
  <div class="gulu-popover" @click="toggleVisible">
    <Teleport to="body">
      <div class="gulu-popover-content" v-show="visible" ref="popover">
        <slot name="content"/>
      </div>
    </Teleport>
    <span ref="trigger">
      <slot/>
   </span>
  </div>
</template>

<style lang="scss" scoped>
.gulu-popover {
  display: inline-block;
  vertical-align: middle;
  position: relative;

  > &-content {
    position: absolute;
    padding: .5em;
    border: 1px solid red;
    box-shadow: 0 0 3px rgba(0, 0, 0, .5);
    transform: translateY(-100%);
  }
}
</style>