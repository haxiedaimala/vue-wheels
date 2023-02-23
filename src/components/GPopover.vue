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
    <span class="gulu-popover-trigger" ref="trigger" @click="toggleVisible">
      <slot/>
   </span>
  </div>
</template>

<style lang="scss" scoped>
$border-color: #333;
$border-raiuds: 4px;

.gulu-popover {
  display: inline-block;
  vertical-align: middle;
  position: relative;

  > &-trigger {
    display: inline-block;
  }

  > &-content {
    position: absolute;
    padding: .5em 1em;
    border: 1px solid $border-color;
    border-radius: $border-raiuds;
    filter: drop-shadow(0 1px 1px rgba(0, 0, 0, .25));
    background: #fff;
    transform: translateY(calc(-100% - 1em));
    max-width: 20em;
    word-break: break-all;

    &::before, &::after {
      content: '';
      width: 0;
      height: 0;
      border: 10px solid transparent;
      border-top-color: black;
      position: absolute;
      top: 100%;
      left: 10px;
    }

    &::after {
      border-top-color: white;
      top: calc(100% - 1px);
    }
  }
}
</style>