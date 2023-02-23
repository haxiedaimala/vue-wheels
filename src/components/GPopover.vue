<script setup lang="ts">
import {nextTick, onMounted, onUnmounted, ref} from 'vue';

const props = defineProps({
  position: {
    type: String,
    default: 'top',
    validator: (value: string) => {
      return ['top', 'bottom', 'left', 'right'].indexOf(value) !== -1;
    }
  },
  trigger: {
    type: String,
    default: 'click',
    validator: (value: string) => {
      return ['click', 'hover'].indexOf(value) >= 0;
    }
  }
});
const visible = ref(false);
const triggerItem = ref<HTMLSpanElement>();
const popover = ref<HTMLDivElement>();
const onClickDocument = (e: MouseEvent) => {
  if (!popover.value?.contains(e.target as HTMLElement) && !triggerItem.value?.contains(e.target as HTMLElement)) {
    close();
  }
};
const positionContent = () => {
  const {width, height, top, left} = triggerItem.value!.getBoundingClientRect();
  const {height: height2} = popover.value!.getBoundingClientRect();
  const xxx = {
    top: {
      left: left + window.scrollX,
      top: top + window.screenY
    },
    bottom: {
      left: left + window.scrollX,
      top: top + height + window.screenY
    },
    left: {
      left: left + window.scrollX,
      top: top + (height - height2) / 2 + window.screenY
    },
    right: {
      left: left + width + window.scrollX,
      top: top + (height - height2) / 2 + window.screenY
    }
  };
  //@ts-ignore
  popover.value!.style.left = xxx[props.position].left + 'px';
  //@ts-ignore
  popover.value!.style.top = xxx[props.position].top + 'px';
};

const open = () => {
  visible.value = true;
  nextTick(() => {
    positionContent();
    props.trigger === 'click' ? document.addEventListener('click', onClickDocument) : '';
  });
};
const close = () => {
  visible.value = false;
  props.trigger === 'click' ? document.removeEventListener('click', onClickDocument) : '';
};
const toggleVisible = () => {
  visible.value ? close() : open();
};
onMounted(() => {
  if (props.trigger === 'click') {
    triggerItem.value?.addEventListener('click', toggleVisible);
  } else if (props.trigger === 'hover') {
    triggerItem.value?.addEventListener('mouseenter', open);
    triggerItem.value?.addEventListener('mouseleave', close);
  }
});
onUnmounted(() => {
  if (props.trigger === 'click') {
    triggerItem.value?.removeEventListener('click', toggleVisible);
  } else if (props.trigger === 'hover') {
    triggerItem.value?.removeEventListener('mouseenter', open);
    triggerItem.value?.removeEventListener('mouseleave', close);
  }
});
</script>

<template>
  <div class="gulu-popover">
    <Teleport to="body">
      <div class="gulu-popover-content" :class="{[`position-${position}`]:position}" v-show="visible" ref="popover">
        <slot name="content" :close="close"/>
      </div>
    </Teleport>
    <span class="gulu-popover-trigger" ref="triggerItem">
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
    max-width: 20em;
    word-break: break-all;

    &::before, &::after {
      content: '';
      width: 0;
      height: 0;
      border: 10px solid transparent;
      position: absolute;
    }

    &.position-top {
      transform: translateY(calc(-100% - 10px));

      &::before,
      &::after {
        left: 10px;
      }

      &::before {
        border-top-color: black;
        top: 100%;
      }

      &::after {
        border-top-color: white;
        top: calc(100% - 1px);
      }
    }

    &.position-bottom {
      transform: translateY(10px);

      &::before,
      &::after {
        left: 10px;
      }

      &::before {
        border-bottom-color: black;
        bottom: 100%;
      }

      &::after {
        border-bottom-color: white;
        bottom: calc(100% - 1px);
      }
    }

    &.position-left {
      transform: translateX(calc(-100% - 10px));

      &::before,
      &::after {
        top: 50%;
        transform: translateY(-50%);
      }

      &::before {
        border-left-color: black;
        left: 100%;
      }

      &::after {
        border-left-color: white;
        left: calc(100% - 1px);
      }
    }

    &.position-right {
      transform: translateX(10px);

      &::before,
      &::after {
        top: 50%;
        transform: translateY(-50%);
      }

      &::before {
        border-right-color: black;
        right: 100%;
      }

      &::after {
        border-right-color: white;
        right: calc(100% - 1px);
      }
    }
  }
}
</style>