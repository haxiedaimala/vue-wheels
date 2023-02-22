<script setup lang="ts">
import {onMounted, ref} from 'vue';

const visible = ref(true);
const toggleVisible = () => {
  visible.value = !visible.value;
  if (visible.value === true) {
    document.addEventListener('click', function xxx() {
      visible.value = false;
      document.removeEventListener('click', xxx);
    });
  }
};
const trigger = ref<HTMLSpanElement>();
let popover = ref<HTMLDivElement>();
onMounted(() => {
  const {top, left} = trigger.value!.getBoundingClientRect();
  popover.value!.style.left = left + window.scrollX + 'px';
  popover.value!.style.top = top + window.screenY + 'px';
});
</script>

<template>
  <div class="gulu-popover" @click.stop="toggleVisible">
    <Teleport to="body">
      <div class="gulu-popover-content" v-show="visible" @click.stop ref="popover">
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