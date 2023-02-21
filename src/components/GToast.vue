<script setup lang="ts">
import {computed, useSlots} from 'vue';

const props = defineProps({
  visible: {
    type: Boolean,
    default: false
  },
  autoClose: {
    type: Boolean,
    default: true
  },
  autoCloseDelay: {
    type: Number,
    default: 3
  },
  closeButton: {
    type: Object,
    default: () => {
      return {
        text: '关闭',
        callback: undefined
      };
    }
  },
  enableHtml: {
    type: Boolean,
    default: false
  }
});
const emits = defineEmits<{
  (e: 'update:visible', value: boolean): void
}>();

const close = () => emits('update:visible', !props.visible);
if (props.autoClose) {
  setTimeout(() => {
    close();
  }, props.autoCloseDelay * 1000);
}

const onClickClose = () => {
  if (typeof props.closeButton?.callback === 'function') {
    props.closeButton.callback();
  }
  close();
};

const slotContent = computed(() => useSlots().default!()[0].children);

</script>

<template>
  <div class="gulu-toast" v-if="visible">
    <template v-if="enableHtml">
      <div v-html="slotContent"></div>
    </template>
    <template v-else>
      <slot/>
    </template>
    <template v-if="closeButton">
      <span class="gulu-toast-line"></span>
      <span class="gulu-toast-button" @click="onClickClose">{{ closeButton.text }}</span>
    </template>
  </div>
</template>

<style lang="scss" scoped>
$toast-height: 40px;
$toast-bg: rgba(0, 0, 0, 0.75);
.gulu-toast {
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
  box-shadow: 0 0 3px rgba(0, 0, 0, .5);
  display: flex;
  align-items: center;
  padding: 0 0 0 16px;

  &-line {
    margin-left: 16px;
    height: 100%;
    border-left: 1px solid #666;
  }

  &-button {
    padding: 0 16px;
    font-size: inherit;
    cursor: pointer;
  }
}
</style>