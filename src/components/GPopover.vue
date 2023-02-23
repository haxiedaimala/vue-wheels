<script setup lang="ts">
import {nextTick, ref} from 'vue';

const visible = ref(false);
const trigger = ref<HTMLSpanElement>();
const popover = ref<HTMLDivElement>();
const onClickDocument = (e: MouseEvent) => {
  if (!popover.value?.contains(e.target as HTMLElement) && !trigger.value?.contains(e.target as HTMLElement)) {
    close();
  }
};
const positionContent = () => {
  const {top, left} = trigger.value!.getBoundingClientRect();
  popover.value!.style.left = left + window.scrollX + 'px';
  popover.value!.style.top = top + window.screenY + 'px';
};

const open = () => {
  visible.value = true;
  nextTick(() => {
    positionContent();
    document.addEventListener('click', onClickDocument);
  });
};
const close = () => {
  visible.value = false;
  document.removeEventListener('click', onClickDocument);
};
const toggleVisible = () => {
  visible.value ? close() : open();
};
</script>

<template>
  <div class="gulu-popover">
    <Teleport to="body">
      <div class="gulu-popover-content" v-show="visible" ref="popover">
        <slot name="content"/>
      </div>
    </Teleport>
    <span ref="trigger" @click="toggleVisible">
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