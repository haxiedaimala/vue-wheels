<script setup lang="ts">
import {onMounted, ref} from 'vue';

const props = defineProps({
  gutter: {
    type: [String, Number],
    default: 0
  }
});
const row = ref<HTMLDivElement>();
onMounted(() => {
  if (props.gutter <= 0) return;
  const colLsit = row.value!.children;
  const length = colLsit?.length || 0;
  for (let i = 0; i < length - 1; i++) {
    (colLsit[i] as HTMLDivElement).style.marginRight = props.gutter + 'px';
  }
});
</script>

<template>
  <div class="gulu-layout-row" ref="row">
    <slot/>
  </div>
</template>

<style lang="scss">
.gulu-layout-row {
  display: flex;
}
</style>