<script setup lang="ts">
import {ref} from 'vue';

const visible = ref(false);
const toggleVisible = () => {
  visible.value = !visible.value;
  if (visible.value === true) {
    document.addEventListener('click', function xxx() {
      visible.value = false;
      document.removeEventListener('click', xxx);
    });
  }
};

</script>

<template>
  <div class="gulu-popover" @click.stop="toggleVisible">
    <div class="gulu-popover-content" v-if="visible" @click.stop>
      <slot name="content"/>
    </div>
    <slot/>
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
    bottom: 100%;
    left: 0;
    border: 1px solid red;
    box-shadow: 0 0 3px rgba(0, 0, 0, .5);
  }
}
</style>