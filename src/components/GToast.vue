<script setup lang="ts">
import {computed, onMounted, ref, useSlots} from 'vue';

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
  },
  position: {
    type: String,
    default: 'top',
    validator: (val: string) => {
      return ['top', 'middle', 'bottom'].indexOf(val) !== -1;
    }
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
const toast = ref<HTMLDivElement>();
const line = ref<HTMLElement>();
onMounted(() => {
  line.value!.style.height = toast.value?.getBoundingClientRect().height + 'px';
});
</script>

<template>
  <div class="gulu-toast" v-if="visible" ref="toast" :class="{[`position-${position}`]:position}">
    <div class="gulu-toast-message">
      <div v-if="enableHtml" v-html="slotContent"></div>
      <template v-else>
        <slot/>
      </template>
    </div>
    <template v-if="closeButton">
      <span class="gulu-toast-line" ref="line"></span>
      <span class="gulu-toast-button" @click="onClickClose">{{ closeButton.text }}</span>
    </template>
  </div>
</template>

<style lang="scss" scoped>
@keyframes slide-up {
  0% {
    opacity: 0;
    transform: translate(-50%, 100%);
  }
  100% {
    opacity: 1;
    transform: translate(-50%, 0);
  }
}

@keyframes slide-down {
  0% {
    opacity: 0;
    transform: translate(-50%, -100%);
  }
  100% {
    opacity: 1;
    transform: translate(-50%, 0);
  }
}

@keyframes fade-in {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

$toast-min-height: 40px;
$toast-bg: rgba(0, 0, 0, 0.75);
$animation-duration: 300ms;
.gulu-toast {
  position: fixed;
  left: 50%;
  transform: translate(-50%, 0);
  font-size: var(--font-size);
  min-height: $toast-min-height;
  line-height: 1.8;
  background: $toast-bg;
  color: white;
  border-radius: var(--border-radius);
  box-shadow: 0 0 3px rgba(0, 0, 0, .5);
  display: flex;
  align-items: center;
  padding: 0 0 0 .8em;

  &.position-top {
    top: 0;
    border-top-left-radius: 0;
    border-top-right-radius: 0;
    animation: slide-down $animation-duration;
  }

  &.position-bottom {
    bottom: 0;
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
    animation: slide-up $animation-duration;
  }

  &.position-middle {
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    animation: fade-in $animation-duration;
  }

  &-message {
    padding: .8em 0;
  }

  &-line {
    margin-left: .8em;
    border-left: 1px solid #666;
  }

  &-button {
    padding: 0 .8em;
    font-size: inherit;
    cursor: pointer;
    flex-shrink: 0;
  }
}
</style>