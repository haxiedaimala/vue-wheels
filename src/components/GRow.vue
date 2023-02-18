<script setup lang="ts">
import {onMounted, ref} from 'vue';

const props = defineProps({
  gutter: {
    type: [String, Number],
    default: 0
  },
  justify: {
    type: String,
    default: 'start',
    validator(value: string): boolean {
      const array = ['end', 'center', 'space-between', 'space-around', 'start'];
      return array.indexOf(value) !== -1;
    }
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
  <div class="gulu-layout-row" :class="{[`gulu-layout-${justify}`]:justify}" ref="row">
    <slot/>
  </div>
</template>

<style lang="scss">
.gulu-layout-row {
  display: flex;
  justify-content: flex-start;

  &.gulu-layout-center {
    justify-content: center;
  }

  &.gulu-layout-end {
    justify-content: flex-end;
  }

  &.gulu-layout-space-between {
    justify-content: space-between;
  }

  &.gulu-layout-space-around {
    justify-content: space-around;
  }
}
</style>